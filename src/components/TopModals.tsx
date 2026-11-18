import React, { useState } from 'react';
import { AlertTriangle, Lock, RotateCcw, Send, X } from 'lucide-react';
import { TEACHER_ACCESS_PASSWORD } from '../data/answerKeyAndExplanations';

interface SubmitModalProps {
  isOpen: boolean;
  answeredCount: number;
  unansweredCount: number;
  onCancel: () => void;
  onConfirm: () => void;
}

export const SubmitConfirmationModal: React.FC<SubmitModalProps> = ({
  isOpen,
  answeredCount,
  unansweredCount,
  onCancel,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="submit-modal-title"
      className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/50 px-3 pt-4 sm:pt-10"
    >
      <div className="w-full max-w-md rounded-2xl border border-teal-200 bg-white p-5 shadow-xl">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-teal-900">
            <Send className="h-5 w-5 shrink-0 text-teal-700" />
            <h2 id="submit-modal-title" className="text-base font-bold">
              Konfirmasi Pengumpulan Jawaban
            </h2>
          </div>
          <button
            type="button"
            onClick={onCancel}
            aria-label="Tutup dialog pengumpulan"
            className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          Apakah Anda yakin ingin mengumpulkan seluruh jawaban? Setelah dikumpulkan, jawaban tidak dapat diubah kembali.
        </p>

        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700 space-y-1">
          <p className="font-semibold">
            Soal sudah dijawab: <span className="text-teal-800 tabular-nums">{answeredCount} dari 10</span>
          </p>
          <p className="font-semibold">
            Soal belum dijawab: <span className="text-slate-900 tabular-nums">{unansweredCount} soal</span>
          </p>
        </div>

        {unansweredCount > 0 && (
          <div className="mt-3 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs font-medium text-amber-900">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" />
            <span>
              Peringatan: Masih terdapat {unansweredCount} soal yang belum dijawab. Anda masih dapat kembali memeriksa sebelum mengumpulkan.
            </span>
          </div>
        )}

        <div className="mt-5 flex flex-wrap items-center justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="min-h-[40px] rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-800 transition-colors hover:bg-slate-100 whitespace-nowrap"
          >
            KEMBALI MEMERIKSA
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="min-h-[40px] rounded-xl bg-teal-700 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-teal-800 whitespace-nowrap"
          >
            YA, KUMPULKAN
          </button>
        </div>
      </div>
    </div>
  );
};

interface ResetModalProps {
  isOpen: boolean;
  studentName: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export const ResetConfirmationModal: React.FC<ResetModalProps> = ({
  isOpen,
  studentName,
  onCancel,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reset-modal-title"
      className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/50 px-3 pt-4 sm:pt-10"
    >
      <div className="w-full max-w-md rounded-2xl border border-red-200 bg-white p-5 shadow-xl">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-red-900">
            <RotateCcw className="h-5 w-5 shrink-0 text-red-700" />
            <h2 id="reset-modal-title" className="text-base font-bold">
              Konfirmasi Reset Progres
            </h2>
          </div>
          <button
            type="button"
            onClick={onCancel}
            aria-label="Tutup dialog reset progres"
            className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-700">
          Apakah Anda yakin ingin menghapus seluruh jawaban dan mengulang pengerjaan dari awal untuk akun <strong>{studentName}</strong>? Tindakan ini tidak memengaruhi akun murid lain.
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="min-h-[40px] rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-800 transition-colors hover:bg-slate-100 whitespace-nowrap"
          >
            BATAL
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="min-h-[40px] rounded-xl bg-red-700 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-red-800 whitespace-nowrap"
          >
            YA, RESET PROGRES
          </button>
        </div>
      </div>
    </div>
  );
};

interface TeacherPasswordModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onSuccess: () => void;
}

export const TeacherPasswordModal: React.FC<TeacherPasswordModalProps> = ({
  isOpen,
  onCancel,
  onSuccess,
}) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim() === TEACHER_ACCESS_PASSWORD) {
      setPassword('');
      setError(null);
      onSuccess();
    } else {
      setError('Password Mode Guru salah. Akses pembahasan dan kunci jawaban ditolak.');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="teacher-modal-title"
      className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/50 px-3 pt-4 sm:pt-10"
    >
      <div className="w-full max-w-md rounded-2xl border border-teal-200 bg-white p-5 shadow-xl">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-teal-900">
            <Lock className="h-5 w-5 shrink-0 text-teal-700" />
            <h2 id="teacher-modal-title" className="text-base font-bold">
              Autentikasi Mode Guru
            </h2>
          </div>
          <button
            type="button"
            onClick={() => {
              setPassword('');
              setError(null);
              onCancel();
            }}
            aria-label="Tutup dialog mode guru"
            className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-2 text-xs leading-relaxed text-slate-600">
          Masukkan password guru untuk membuka dashboard penilaian, kunci jawaban, analisis kesalahan, serta pembahasan lengkap dan diagram benda bebas.
        </p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          {error && (
            <div
              role="alert"
              className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-800"
            >
              {error}
            </div>
          )}

          <div>
            <label
              htmlFor="teacher-password-input"
              className="block text-xs font-semibold text-slate-800"
            >
              Password Mode Guru
            </label>
            <input
              id="teacher-password-input"
              type="password"
              autoFocus
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError(null);
              }}
              placeholder="Masukkan password guru"
              className="mt-1.5 block w-full min-h-[42px] rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 focus:border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700/20"
            />
          </div>

          <div className="flex flex-wrap items-center justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={() => {
                setPassword('');
                setError(null);
                onCancel();
              }}
              className="min-h-[40px] rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-800 transition-colors hover:bg-slate-100 whitespace-nowrap"
            >
              BATAL
            </button>
            <button
              type="submit"
              className="min-h-[40px] rounded-xl bg-teal-700 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-teal-800 whitespace-nowrap"
            >
              BUKA MODE GURU
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
