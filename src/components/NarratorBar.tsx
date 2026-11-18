import React, { useEffect, useState } from 'react';
import { Pause, Play, Square, Volume2 } from 'lucide-react';
import { mathToIndonesianSpeech } from '../utils/mathToSpeech';

interface NarratorBarProps {
  mode: 'question' | 'explanation';
  speechText: string;
  compact?: boolean;
}

type SpeechStatus = 'idle' | 'speaking' | 'paused';

function selectBestIndonesianVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  if (!voices.length) return null;

  const idVoices = voices.filter((v) => v.lang.toLowerCase().startsWith('id'));
  const maleKeywords = ['male', 'laki', 'pria', 'ardi', 'guntur', 'andika', 'budi'];

  for (const v of idVoices) {
    const lower = v.name.toLowerCase();
    if (maleKeywords.some((kw) => kw && lower.includes(kw))) {
      return v;
    }
  }
  if (idVoices.length > 0) return idVoices[0];

  const msId = voices.find((v) => v.lang.toLowerCase().includes('ms'));
  return msId ?? voices[0];
}

export const NarratorBar: React.FC<NarratorBarProps> = ({
  mode,
  speechText,
  compact = false,
}) => {
  const [status, setStatus] = useState<SpeechStatus>('idle');
  const [supported, setSupported] = useState<boolean>(true);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setSupported(false);
      return;
    }

    const updateVoices = () => {
      setVoices(window.speechSynthesis.getVoices());
    };

    updateVoices();
    window.speechSynthesis.addEventListener('voiceschanged', updateVoices);
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', updateVoices);
      window.speechSynthesis.cancel();
    };
  }, []);

  // Stop speech when switching questions or text
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setStatus('idle');
    }
  }, [speechText]);

  const handleListen = () => {
    if (!supported) return;

    window.speechSynthesis.cancel();
    const cleaned = mathToIndonesianSpeech(speechText);
    const utterance = new SpeechSynthesisUtterance(cleaned);
    utterance.lang = 'id-ID';
    utterance.rate = 0.95;
    utterance.pitch = 0.92;

    const chosenVoice = selectBestIndonesianVoice(voices);
    if (chosenVoice) {
      utterance.voice = chosenVoice;
    }

    utterance.onstart = () => setStatus('speaking');
    utterance.onend = () => setStatus('idle');
    utterance.onerror = () => setStatus('idle');

    setStatus('speaking');
    window.speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    if (!supported || status !== 'speaking') return;
    window.speechSynthesis.pause();
    setStatus('paused');
  };

  const handleResume = () => {
    if (!supported || status !== 'paused') return;
    window.speechSynthesis.resume();
    setStatus('speaking');
  };

  const handleStop = () => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setStatus('idle');
  };

  const primaryLabel = mode === 'question' ? 'DENGARKAN SOAL' : 'DENGARKAN PEMBAHASAN';

  return (
    <div
      className={`rounded-xl border border-teal-200 bg-teal-50/70 ${
        compact ? 'p-3' : 'p-3.5 sm:p-4'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2.5">
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-wide text-teal-900">
            MR JO — NARATOR BIMBINGAN FISIKA
          </p>
          <p className="text-[11px] text-teal-700">
            {supported
              ? status === 'speaking'
                ? 'Sedang membacakan narasi dengan sintesis suara virtual...'
                : status === 'paused'
                  ? 'Pembacaan dijeda. Tekan Lanjutkan untuk meneruskan.'
                  : 'Narator virtual siap membacakan teks dan rumus fisika.'
              : 'Browser perangkat Anda belum mendukung Web Speech API.'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={handleListen}
            disabled={!supported}
            className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg bg-teal-700 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-50 whitespace-nowrap"
          >
            <Volume2 className="h-3.5 w-3.5 shrink-0" />
            <span>{primaryLabel}</span>
          </button>

          <button
            type="button"
            onClick={handlePause}
            disabled={!supported || status !== 'speaking'}
            className="inline-flex min-h-[38px] items-center gap-1 rounded-lg border border-teal-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-teal-900 transition-colors hover:bg-teal-100 disabled:cursor-not-allowed disabled:opacity-45 whitespace-nowrap"
          >
            <Pause className="h-3.5 w-3.5 shrink-0" />
            <span>JEDA</span>
          </button>

          <button
            type="button"
            onClick={handleResume}
            disabled={!supported || status !== 'paused'}
            className="inline-flex min-h-[38px] items-center gap-1 rounded-lg border border-teal-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-teal-900 transition-colors hover:bg-teal-100 disabled:cursor-not-allowed disabled:opacity-45 whitespace-nowrap"
          >
            <Play className="h-3.5 w-3.5 shrink-0" />
            <span>LANJUTKAN</span>
          </button>

          <button
            type="button"
            onClick={handleStop}
            disabled={!supported || status === 'idle'}
            className="inline-flex min-h-[38px] items-center gap-1 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-45 whitespace-nowrap"
          >
            <Square className="h-3 w-3 shrink-0" />
            <span>HENTIKAN</span>
          </button>
        </div>
      </div>
    </div>
  );
};
