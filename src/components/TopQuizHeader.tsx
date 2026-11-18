import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Lock,
  LogOut,
  RotateCcw,
  Send,
} from 'lucide-react';
import type {
  PhysicsQuestion,
  QuestionStatus,
  StudentAnswersMap,
  StudentIdentity,
} from '../types/quiz';
import { isQuestionAnswered } from '../utils/grading';

interface TopQuizHeaderProps {
  student: StudentIdentity;
  questions: PhysicsQuestion[];
  answers: StudentAnswersMap;
  currentIndex: number;
  isSubmitted: boolean;
  isTeacherMode: boolean;
  onSelectQuestion: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
  onOpenSubmitModal: () => void;
  onOpenResetModal: () => void;
  onOpenTeacherModal: () => void;
  onLogout: () => void;
}

export const TopQuizHeader: React.FC<TopQuizHeaderProps> = ({
  student,
  questions,
  answers,
  currentIndex,
  isSubmitted,
  isTeacherMode,
  onSelectQuestion,
  onPrev,
  onNext,
  onOpenSubmitModal,
  onOpenResetModal,
  onOpenTeacherModal,
  onLogout,
}) => {
  const answeredCount = questions.filter((q) =>
    isQuestionAnswered(q, answers[q.id])
  ).length;
  const progressPercent = Math.round((answeredCount / questions.length) * 100);

  return (
    <header className="sticky top-0 z-40 border-b border-teal-900/15 bg-white shadow-sm">
      {/* Row 1: Dark Tosca Brand + Student Identity + Utility Actions */}
      <div className="bg-teal-900 text-white">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-2 gap-y-1.5 px-2.5 py-2 sm:px-6">
          <div className="min-w-0 flex-1 basis-[140px]">
            <p className="truncate text-xs font-bold tracking-tight sm:text-sm">
              QUIZ FISIKA — DINAMIKA ROTASI
            </p>
            <p className="truncate text-[11px] text-teal-100">
              {student.fullName} · {student.className}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
            <button
              type="button"
              onClick={onOpenTeacherModal}
              className="inline-flex min-h-[32px] sm:min-h-[36px] items-center gap-1 rounded-lg border border-teal-600 bg-teal-800 px-2 py-1 text-[10px] sm:px-2.5 sm:text-[11px] font-semibold text-white transition-colors hover:bg-teal-700 whitespace-nowrap"
            >
              <Lock className="h-3 w-3 shrink-0" />
              <span>{isTeacherMode ? 'DASHBOARD GURU' : 'MODE GURU'}</span>
            </button>

            <button
              type="button"
              onClick={onOpenResetModal}
              className="inline-flex min-h-[32px] sm:min-h-[36px] items-center gap-1 rounded-lg border border-teal-700 bg-teal-950/60 px-2 py-1 text-[10px] sm:px-2.5 sm:text-[11px] font-semibold text-teal-100 transition-colors hover:bg-teal-800 whitespace-nowrap"
            >
              <RotateCcw className="h-3 w-3 shrink-0" />
              <span>RESET PROGRES</span>
            </button>

            <button
              type="button"
              onClick={onLogout}
              aria-label="Keluar akun murid"
              className="inline-flex min-h-[32px] sm:min-h-[36px] items-center gap-1 rounded-lg border border-teal-700 bg-teal-950/40 px-2 py-1 text-[10px] sm:px-2.5 sm:text-[11px] font-semibold text-teal-100 transition-colors hover:bg-red-700 hover:border-red-600 whitespace-nowrap"
            >
              <LogOut className="h-3 w-3 shrink-0" />
              <span>KELUAR</span>
            </button>
          </div>
        </div>
      </div>

      {/* Row 2: Progress + Question Palette 1-10 + Prev/Next + Submit (hidden when in Teacher Dashboard) */}
      {!isTeacherMode && (
        <div className="mx-auto max-w-5xl px-2.5 py-1.5 sm:px-6 sm:py-2 space-y-1.5">
          {/* Progress bar & Prev/Next/Submit controls */}
          <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2">
            <div className="flex items-center gap-2 min-w-[110px] flex-1 basis-[120px]">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full bg-teal-600 transition-all duration-200"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="text-[11px] font-semibold text-slate-700 tabular-nums whitespace-nowrap">
                {answeredCount}/{questions.length} dijawab
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
              <button
                type="button"
                onClick={onPrev}
                disabled={currentIndex <= 0}
                className="inline-flex min-h-[32px] sm:min-h-[36px] items-center gap-0.5 rounded-lg border border-slate-300 bg-white px-2 py-1 text-[11px] sm:px-2.5 sm:text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 whitespace-nowrap"
              >
                <ChevronLeft className="h-3.5 w-3.5 shrink-0" />
                <span>Sebelumnya</span>
              </button>

              <button
                type="button"
                onClick={onNext}
                disabled={currentIndex >= questions.length - 1}
                className="inline-flex min-h-[32px] sm:min-h-[36px] items-center gap-0.5 rounded-lg border border-slate-300 bg-white px-2 py-1 text-[11px] sm:px-2.5 sm:text-xs font-semibold text-slate-800 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 whitespace-nowrap"
              >
                <span>Berikutnya</span>
                <ChevronRight className="h-3.5 w-3.5 shrink-0" />
              </button>

              {!isSubmitted && (
                <button
                  type="button"
                  onClick={onOpenSubmitModal}
                  className="inline-flex min-h-[32px] sm:min-h-[36px] items-center gap-1 rounded-lg bg-teal-700 px-2.5 py-1 text-[11px] sm:px-3 sm:text-xs font-bold text-white shadow-sm transition-colors hover:bg-teal-800 whitespace-nowrap"
                >
                  <Send className="h-3 w-3 shrink-0" />
                  <span>KUMPULKAN</span>
                </button>
              )}
            </div>
          </div>

          {/* Clickable 1-10 Question Palette + Legend */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <nav
              aria-label="Navigasi nomor soal 1 sampai 10"
              className="grid grid-cols-5 gap-1 sm:flex sm:flex-wrap sm:items-center sm:gap-1.5 w-full sm:w-auto"
            >
              {questions.map((q, idx) => {
                const answered = isQuestionAnswered(q, answers[q.id]);
                const isCurrent = idx === currentIndex;
                const status: QuestionStatus = isCurrent
                  ? 'current'
                  : answered
                    ? 'answered'
                    : 'unanswered';

                let btnClass =
                  'bg-slate-200 text-slate-700 border-slate-300 hover:bg-slate-300';
                if (status === 'current') {
                  btnClass =
                    'bg-teal-700 text-white border-teal-800 ring-2 ring-teal-500/35';
                } else if (status === 'answered') {
                  btnClass =
                    'bg-emerald-100 text-teal-900 border-teal-500 hover:bg-emerald-200';
                }

                const statusLabel =
                  status === 'current'
                    ? 'sedang dibuka'
                    : status === 'answered'
                      ? 'sudah dijawab'
                      : 'belum dijawab';

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => onSelectQuestion(idx)}
                    aria-label={`Soal ${q.id} (${statusLabel})`}
                    aria-current={isCurrent ? 'step' : undefined}
                    className={`min-h-[30px] sm:min-h-[34px] sm:min-w-[34px] rounded-lg border px-1.5 sm:px-2 text-xs font-bold tabular-nums transition-colors ${btnClass}`}
                  >
                    {q.id}
                  </button>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center gap-3 text-[11px] text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <span className="inline-block h-3 w-3 rounded border border-slate-300 bg-slate-200" />
                Belum dijawab
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="inline-block h-3 w-3 rounded border border-teal-800 bg-teal-700" />
                Sedang dibuka
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="inline-block h-3 w-3 rounded border border-teal-500 bg-emerald-100" />
                Sudah dijawab
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
