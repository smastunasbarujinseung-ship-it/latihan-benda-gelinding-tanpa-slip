import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ClipboardList,
  ShieldCheck,
  XCircle,
} from 'lucide-react';
import type {
  AnswerKey,
  ExplanationSections,
  PhysicsQuestion,
  QuizGradingSummary,
  QuizSessionState,
} from '../types/quiz';
import { FreeBodyDiagram } from './FreeBodyDiagram';
import { MathText } from './MathText';
import { NarratorBar } from './NarratorBar';

interface TeacherDashboardProps {
  session: QuizSessionState;
  questions: PhysicsQuestion[];
  answerKeys: Record<number, AnswerKey>;
  explanations: Record<number, ExplanationSections>;
  summary: QuizGradingSummary;
  onExitTeacherMode: () => void;
}

function buildExplanationSpeech(
  q: PhysicsQuestion,
  key: AnswerKey,
  exp: ExplanationSections
): string {
  return [
    `Pembahasan Soal nomor ${q.id}, ${q.topic}.`,
    `Identifikasi masalah: ${exp.identifikasiMasalah.join(' ')}`,
    `Diketahui: ${exp.diketahui.join(', ')}.`,
    `Ditanyakan: ${exp.ditanyakan}.`,
    `Landasan teori: ${exp.landasanTeori.join(' ')}`,
    `Diagram benda bebas: ${exp.fbdCaption}`,
    `Penyelesaian matematis: ${exp.penyelesaianMatematis.join(' ')}`,
    `Interpretasi hasil: ${exp.interpretasiHasil}`,
    `Kesimpulan: ${exp.kesimpulan} Kunci jawaban: ${key.displayKey}.`,
    `Kesalahan umum yang perlu dihindari: ${exp.kesalahanUmum.join(' ')}`,
  ].join(' ');
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({
  session,
  questions,
  answerKeys,
  explanations,
  summary,
  onExitTeacherMode,
}) => {
  const [expandedQuestionId, setExpandedQuestionId] = useState<number | 'all'>('all');

  return (
    <section aria-label="Dashboard Mode Guru" className="space-y-6">
      {/* Top Action Bar inside Teacher Dashboard */}
      <div className="rounded-2xl border border-teal-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="h-6 w-6 shrink-0 text-teal-700" />
            <div>
              <h1 className="text-lg font-bold text-slate-900 sm:text-xl">
                Dashboard Mode Guru &amp; Pembahasan Lengkap
              </h1>
              <p className="text-xs text-slate-600">
                Akses terotentikasi untuk evaluasi murid, kunci jawaban, diagram benda bebas, dan pembahasan sistematis.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onExitTeacherMode}
            className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl bg-teal-800 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-teal-900 whitespace-nowrap"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" />
            <span>KEMBALI KE HALAMAN MURID</span>
          </button>
        </div>

        {/* 1-8 Student Metadata & Score Overview */}
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5">
            <p className="text-xs text-slate-500">Identitas &amp; Kelas Murid</p>
            <p className="mt-1 text-sm font-bold text-slate-900">
              {session.student.fullName}
            </p>
            <p className="text-xs font-semibold text-teal-800">
              Kelas: {session.student.className}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5">
            <p className="text-xs text-slate-500">Status &amp; Waktu Pengerjaan</p>
            <p className="mt-1 text-sm font-bold text-slate-900">{session.status}</p>
            <p className="text-xs text-slate-600 tabular-nums">
              Durasi: {summary.durationFormatted}
            </p>
          </div>

          <div className="rounded-xl border border-teal-200 bg-teal-50/70 p-3.5">
            <p className="text-xs text-teal-800 font-medium">Total Skor Mentah</p>
            <p className="mt-1 text-2xl font-bold text-teal-900 tabular-nums">
              {summary.totalRawScore} <span className="text-sm font-semibold">/ 100</span>
            </p>
            <p className="text-[11px] text-teal-700 tabular-nums">
              Dijawab: {summary.answeredCount} · Kosong: {summary.unansweredCount}
            </p>
          </div>

          <div className="rounded-xl border border-teal-700 bg-teal-800 p-3.5 text-white">
            <p className="text-xs text-teal-200 font-medium">Nilai Akhir (Ternormalisasi)</p>
            <p className="mt-1 text-2xl font-bold tabular-nums">
              {summary.normalizedFinalScore}
            </p>
            <p className="text-[11px] text-teal-100">
              Skala 0 – 100
            </p>
          </div>
        </div>

        {/* 11. Analisis Kesalahan Murid */}
        <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50/60 p-4">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-950">
            <ClipboardList className="h-4 w-4 shrink-0 text-amber-700" />
            <span>Analisis Kesalahan &amp; Diagnostik Pemahaman Konsep</span>
          </div>
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-xs leading-relaxed text-amber-950">
            {summary.errorAnalysis.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* 4, 5, 10. Tabel Jawaban Murid, Kunci Jawaban, dan Skor Per Soal */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <h2 className="text-base font-bold text-slate-900">
          Rekapitulasi Jawaban, Kunci, dan Skor Setiap Soal
        </h2>
        <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[640px] text-left text-xs">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-3 py-2.5 font-bold">No</th>
                <th className="px-3 py-2.5 font-bold">Topik</th>
                <th className="px-3 py-2.5 font-bold">Jawaban Murid</th>
                <th className="px-3 py-2.5 font-bold">Kunci Jawaban</th>
                <th className="px-3 py-2.5 font-bold text-right">Skor</th>
                <th className="px-3 py-2.5 font-bold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {summary.breakdown.map((item) => (
                <tr key={item.questionId} className="bg-white">
                  <td className="px-3 py-2.5 font-bold tabular-nums text-slate-900">
                    {item.questionId}
                  </td>
                  <td className="px-3 py-2.5 text-slate-700">{item.topic}</td>
                  <td className="px-3 py-2.5 text-slate-800">{item.studentAnswerDisplay}</td>
                  <td className="px-3 py-2.5 font-medium text-teal-900">
                    <MathText text={item.correctAnswerDisplay} />
                  </td>
                  <td className="px-3 py-2.5 text-right font-bold tabular-nums text-slate-900 whitespace-nowrap">
                    {item.rawScore} / {item.maxScore}
                  </td>
                  <td className="px-3 py-2.5">
                    {item.isCorrect ? (
                      <span className="inline-flex items-center gap-1 font-semibold text-teal-800">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-teal-700" />
                        Benar
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 font-semibold text-red-700">
                        <XCircle className="h-3.5 w-3.5 shrink-0 text-red-600" />
                        {item.isAnswered ? 'Salah / Parsial' : 'Kosong'}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 9. Pembahasan Lengkap Semua Soal + Diagram Benda Bebas + MR JO TTS */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 px-1">
          <h2 className="text-base font-bold text-slate-900 sm:text-lg">
            Pembahasan Ilmiah Lengkap &amp; Diagram Benda Bebas (Soal 1–10)
          </h2>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setExpandedQuestionId('all')}
              className={`min-h-[34px] rounded-lg border px-3 py-1 text-xs font-semibold ${
                expandedQuestionId === 'all'
                  ? 'border-teal-800 bg-teal-700 text-white'
                  : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              Tampilkan Semua
            </button>
          </div>
        </div>

        {questions.map((q) => {
          const key = answerKeys[q.id];
          const exp = explanations[q.id];
          const itemBreakdown = summary.breakdown.find((b) => b.questionId === q.id);
          const isOpen = expandedQuestionId === 'all' || expandedQuestionId === q.id;

          return (
            <article
              key={q.id}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 bg-slate-50/70 px-4 py-3 sm:px-6">
                <div>
                  <p className="text-xs font-bold text-teal-800">
                    Soal {q.id} · {q.kindLabel} · Skor Murid: {itemBreakdown?.rawScore ?? 0}/{q.maxScore}
                  </p>
                  <h3 className="text-sm font-bold text-slate-900 sm:text-base">
                    {q.stimulusTitle}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setExpandedQuestionId(
                      expandedQuestionId === q.id ? 'all' : q.id
                    )
                  }
                  className="inline-flex min-h-[34px] items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100"
                >
                  {isOpen ? (
                    <>
                      <ChevronUp className="h-3.5 w-3.5" />
                      <span>Fokuskan Soal Lain</span>
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-3.5 w-3.5" />
                      <span>Buka Pembahasan</span>
                    </>
                  )}
                </button>
              </div>

              {isOpen && (
                <div className="p-4 sm:p-6 space-y-5 text-sm leading-relaxed text-slate-800">
                  {/* Teacher Narrator Bar */}
                  <NarratorBar
                    mode="explanation"
                    speechText={buildExplanationSpeech(q, key, exp)}
                    compact
                  />

                  {/* Kunci & Error note */}
                  <div className="rounded-xl border border-teal-200 bg-teal-50/70 p-3.5 text-xs space-y-1">
                    <p className="font-bold text-teal-950">
                      Kunci Jawaban: <MathText text={key.displayKey} />
                    </p>
                    <p className="text-slate-700">
                      Jawaban Murid: <strong>{itemBreakdown?.studentAnswerDisplay}</strong>
                    </p>
                    {itemBreakdown?.errorNote && (
                      <p className="text-red-800 font-medium">
                        Catatan Kesalahan: <MathText text={itemBreakdown.errorNote} />
                      </p>
                    )}
                  </div>

                  {/* 1. Identifikasi Masalah */}
                  <div>
                    <h4 className="text-xs font-bold tracking-wide text-teal-900">
                      1. Identifikasi Masalah
                    </h4>
                    <ul className="mt-1.5 list-disc space-y-1 pl-5 text-slate-700">
                      {exp.identifikasiMasalah.map((line, i) => (
                        <li key={i}>
                          <MathText text={line} />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 2. Diketahui & 3. Ditanyakan */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-3.5">
                      <h4 className="text-xs font-bold tracking-wide text-teal-900">
                        2. Diketahui
                      </h4>
                      <ul className="mt-1.5 list-disc space-y-1 pl-5 text-xs sm:text-sm text-slate-700">
                        {exp.diketahui.map((line, i) => (
                          <li key={i}>
                            <MathText text={line} />
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-3.5">
                      <h4 className="text-xs font-bold tracking-wide text-teal-900">
                        3. Ditanyakan
                      </h4>
                      <p className="mt-1.5 text-xs sm:text-sm text-slate-700">
                        <MathText text={exp.ditanyakan} />
                      </p>
                    </div>
                  </div>

                  {/* 4. Landasan Teori */}
                  <div>
                    <h4 className="text-xs font-bold tracking-wide text-teal-900">
                      4. Landasan Teori
                    </h4>
                    <ul className="mt-1.5 list-disc space-y-1.5 pl-5 text-slate-700">
                      {exp.landasanTeori.map((line, i) => (
                        <li key={i}>
                          <MathText text={line} />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 5. Diagram Benda Bebas */}
                  <div>
                    <h4 className="text-xs font-bold tracking-wide text-teal-900">
                      5. Diagram Benda Bebas (Free Body Diagram)
                    </h4>
                    <p className="mt-1 text-xs font-semibold text-slate-800">
                      <MathText text={exp.fbdTitle} />
                    </p>
                    <div className="mt-2">
                      <FreeBodyDiagram questionId={q.id} />
                    </div>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      <MathText text={exp.fbdCaption} />
                    </p>
                  </div>

                  {/* 6. Penyelesaian Matematis Sistematis */}
                  <div>
                    <h4 className="text-xs font-bold tracking-wide text-teal-900">
                      6. Penyelesaian Matematis Sistematis
                    </h4>
                    <div className="mt-2 space-y-2 rounded-xl border border-slate-200 bg-slate-50/40 p-3.5">
                      {exp.penyelesaianMatematis.map((step, i) => (
                        <div key={i} className="text-sm text-slate-800">
                          <MathText text={step} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 7. Interpretasi Hasil & 8. Kesimpulan */}
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="text-xs font-bold tracking-wide text-teal-900">
                        7. Interpretasi Hasil
                      </h4>
                      <p className="mt-1.5 text-sm text-slate-700">
                        <MathText text={exp.interpretasiHasil} />
                      </p>
                    </div>
                    <div className="rounded-xl border border-teal-200 bg-teal-50/70 p-3.5">
                      <h4 className="text-xs font-bold tracking-wide text-teal-900">
                        8. Kesimpulan
                      </h4>
                      <p className="mt-1.5 text-sm font-semibold text-teal-950">
                        <MathText text={exp.kesimpulan} />
                      </p>
                    </div>
                  </div>

                  {/* 9. Kesalahan Umum */}
                  <div>
                    <h4 className="text-xs font-bold tracking-wide text-red-900">
                      9. Kesalahan Umum yang Sering Terjadi
                    </h4>
                    <ul className="mt-1.5 list-disc space-y-1 pl-5 text-xs sm:text-sm text-slate-700">
                      {exp.kesalahanUmum.map((err, i) => (
                        <li key={i}>
                          <MathText text={err} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};
