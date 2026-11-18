import React from 'react';
import { Award, CheckCircle2, Clock, FileCheck2, Lock } from 'lucide-react';
import type { QuizGradingSummary, QuizSessionState } from '../types/quiz';

interface ResultSummaryProps {
  session: QuizSessionState;
  summary: QuizGradingSummary;
  onReviewLockedQuestion: (index: number) => void;
}

export const ResultSummary: React.FC<ResultSummaryProps> = ({
  session,
  summary,
  onReviewLockedQuestion,
}) => {
  return (
    <section
      aria-label="Hasil Penilaian Murid"
      className="rounded-2xl border border-teal-200 bg-white shadow-sm overflow-hidden"
    >
      <div className="border-b border-teal-100 bg-teal-800 px-5 py-6 text-white sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold tracking-wider text-teal-200">
              REKAPITULASI HASIL ASESMEN FISIKA
            </p>
            <h1 className="mt-1 text-xl font-bold sm:text-2xl">
              SELESAI MENGERJAKAN
            </h1>
          </div>
          <div className="inline-flex items-center gap-2 rounded-xl border border-teal-500/40 bg-teal-900/60 px-3.5 py-2 text-xs font-semibold text-teal-50">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-300" />
            <span>Jawaban Terkunci Otomatis</span>
          </div>
        </div>
      </div>

      <div className="p-5 sm:p-8 space-y-6">
        {/* Identity & Status Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <p className="text-xs font-medium text-slate-500">Nama Lengkap</p>
            <p className="mt-1 text-sm font-bold text-slate-900">
              {session.student.fullName}
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <p className="text-xs font-medium text-slate-500">Kelas</p>
            <p className="mt-1 text-sm font-bold text-slate-900">
              {session.student.className}
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <p className="text-xs font-medium text-slate-500">Status Pengerjaan</p>
            <p className="mt-1 text-sm font-bold text-teal-800">
              SELESAI MENGERJAKAN
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <p className="text-xs font-medium text-slate-500">Waktu Pengerjaan</p>
            <p className="mt-1 flex items-center gap-1.5 text-sm font-bold text-slate-900 tabular-nums">
              <Clock className="h-4 w-4 shrink-0 text-teal-700" />
              <span>{summary.durationFormatted}</span>
            </p>
          </div>
        </div>

        {/* Score Summary Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-teal-200 bg-teal-50/70 p-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-800">
              <Award className="h-4 w-4 shrink-0" />
              <span>Nilai Akhir (Skala 0–100)</span>
            </div>
            <p className="mt-2 text-3xl font-bold text-teal-900 tabular-nums">
              {summary.normalizedFinalScore}
            </p>
            <p className="mt-1 text-xs text-teal-800 tabular-nums">
              Total Skor Mentah: {summary.totalRawScore} / 100
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <FileCheck2 className="h-4 w-4 shrink-0 text-teal-700" />
              <span>Soal Dijawab</span>
            </div>
            <p className="mt-2 text-3xl font-bold text-slate-900 tabular-nums">
              {summary.answeredCount}
            </p>
            <p className="mt-1 text-xs text-slate-500">dari 10 soal tersedia</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold text-slate-600">Soal Kosong</p>
            <p className="mt-2 text-3xl font-bold text-slate-900 tabular-nums">
              {summary.unansweredCount}
            </p>
            <p className="mt-1 text-xs text-slate-500">tidak diisi sebelum dikumpulkan</p>
          </div>
        </div>

        {/* Notice about Teacher-locked Answer Keys & Explanations */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs leading-relaxed text-slate-700 space-y-2">
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <Lock className="h-4 w-4 shrink-0 text-teal-700" />
            <span>Kunci Jawaban &amp; Pembahasan Terkunci</span>
          </div>
          <p>
            Sesuai ketentuan asesmen, kunci jawaban, analisis per butir soal, diagram benda bebas, serta pembahasan lengkap hanya dapat dibuka oleh guru melalui menu <strong>MODE GURU</strong> di bagian atas halaman.
          </p>
          <p className="text-slate-600">
            Anda tetap dapat meninjau kembali jawaban yang telah Anda kirimkan (dalam keadaan terkunci) dengan menekan nomor soal 1–10 pada panel navigasi atas.
          </p>
          <div className="pt-1">
            <button
              type="button"
              onClick={() => onReviewLockedQuestion(0)}
              className="inline-flex min-h-[38px] items-center rounded-lg border border-teal-300 bg-white px-3.5 py-1.5 text-xs font-bold text-teal-900 transition-colors hover:bg-teal-50"
            >
              Tinjau Soal 1 (Terkunci)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
