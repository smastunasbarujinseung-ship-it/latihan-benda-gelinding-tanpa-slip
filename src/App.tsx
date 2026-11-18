import { useCallback, useEffect, useMemo, useState } from 'react';
import { Award } from 'lucide-react';
import { LoginScreen } from './components/LoginScreen';
import { QuestionCard } from './components/QuestionCard';
import { ResultSummary } from './components/ResultSummary';
import { TeacherDashboard } from './components/TeacherDashboard';
import {
  ResetConfirmationModal,
  SubmitConfirmationModal,
  TeacherPasswordModal,
} from './components/TopModals';
import { TopQuizHeader } from './components/TopQuizHeader';
import {
  ANSWER_KEYS,
  FULL_EXPLANATIONS,
} from './data/answerKeyAndExplanations';
import { PHYSICS_QUESTIONS } from './data/questions';
import type {
  QuizSessionState,
  StudentAnswerValue,
  StudentIdentity,
} from './types/quiz';
import { gradeAssessment, isQuestionAnswered } from './utils/grading';
import {
  clearActiveStudent,
  createFreshSession,
  loadActiveStudent,
  loadStudentSession,
  resetStudentSession,
  saveActiveStudent,
  saveStudentSession,
} from './utils/storage';

export default function App() {
  const [session, setSession] = useState<QuizSessionState | null>(() => {
    const active = loadActiveStudent();
    if (active) {
      const existing = loadStudentSession(active);
      return existing ?? createFreshSession(active);
    }

    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('autostart') === '1') {
        const demoStudent: StudentIdentity = {
          fullName: 'Peserta Simulasi',
          className: 'XI IPA 1',
        };
        saveActiveStudent(demoStudent);
        const existing = loadStudentSession(demoStudent);
        const initial = existing ?? createFreshSession(demoStudent);
        saveStudentSession(initial);
        return initial;
      }
    }

    return null;
  });

  const [postSubmitView, setPostSubmitView] = useState<'summary' | 'question'>(
    'summary'
  );
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);
  const [isTeacherAuthenticated, setIsTeacherAuthenticated] = useState(false);

  // Persist before page unload or tab hide
  useEffect(() => {
    if (!session) return;
    const handleFlush = () => {
      saveStudentSession(session);
    };
    window.addEventListener('beforeunload', handleFlush);
    return () => {
      window.removeEventListener('beforeunload', handleFlush);
    };
  }, [session]);

  const handleLogin = useCallback((student: StudentIdentity) => {
    saveActiveStudent(student);
    const existing = loadStudentSession(student);
    const loadedSession = existing ?? createFreshSession(student);
    saveStudentSession(loadedSession);
    setSession(loadedSession);
    setPostSubmitView('summary');
    setIsTeacherAuthenticated(false);
  }, []);

  const handleLogout = useCallback(() => {
    if (session) {
      saveStudentSession(session);
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    clearActiveStudent();
    setSession(null);
    setIsTeacherAuthenticated(false);
    setIsSubmitModalOpen(false);
    setIsResetModalOpen(false);
  }, [session]);

  const updateSession = useCallback(
    (updater: (prev: QuizSessionState) => QuizSessionState) => {
      setSession((prev) => {
        if (!prev) return prev;
        const next = updater(prev);
        saveStudentSession(next);
        return next;
      });
    },
    []
  );

  const handleAnswerChange = useCallback(
    (questionId: number, value: StudentAnswerValue) => {
      updateSession((prev) => {
        if (prev.status === 'Selesai Mengerjakan') return prev;
        return {
          ...prev,
          answers: {
            ...prev.answers,
            [questionId]: value,
          },
        };
      });
    },
    [updateSession]
  );

  const handleSelectQuestion = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(PHYSICS_QUESTIONS.length - 1, index));
      updateSession((prev) => ({
        ...prev,
        currentQuestionIndex: clamped,
      }));
      setPostSubmitView('question');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [updateSession]
  );

  const handlePrev = useCallback(() => {
    if (!session) return;
    handleSelectQuestion(session.currentQuestionIndex - 1);
  }, [session, handleSelectQuestion]);

  const handleNext = useCallback(() => {
    if (!session) return;
    handleSelectQuestion(session.currentQuestionIndex + 1);
  }, [session, handleSelectQuestion]);

  const handleConfirmSubmit = useCallback(() => {
    const nowIso = new Date().toISOString();
    updateSession((prev) => ({
      ...prev,
      status: 'Selesai Mengerjakan',
      submittedAt: nowIso,
    }));
    setIsSubmitModalOpen(false);
    setPostSubmitView('summary');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [updateSession]);

  const handleConfirmReset = useCallback(() => {
    if (!session) return;
    const fresh = resetStudentSession(session.student);
    setSession(fresh);
    setIsResetModalOpen(false);
    setPostSubmitView('summary');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [session]);

  const activeOrInspectionSession: QuizSessionState = useMemo(() => {
    if (session) return session;
    return createFreshSession({
      fullName: 'Belum Ada Murid Login',
      className: '-',
    });
  }, [session]);

  const gradingSummary = useMemo(() => {
    const endTime =
      activeOrInspectionSession.submittedAt ?? new Date().toISOString();
    return gradeAssessment(
      PHYSICS_QUESTIONS,
      activeOrInspectionSession.answers,
      ANSWER_KEYS,
      activeOrInspectionSession.startedAt,
      endTime
    );
  }, [activeOrInspectionSession]);

  // If teacher opens Mode Guru from login screen (no student active)
  if (!session && isTeacherAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <header className="sticky top-0 z-40 border-b border-teal-900/15 bg-teal-900 text-white shadow-sm">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <span className="text-sm font-bold tracking-tight">
              MODE GURU — ASESMEN FISIKA SMA
            </span>
            <button
              type="button"
              onClick={() => setIsTeacherAuthenticated(false)}
              className="min-h-[38px] rounded-lg border border-teal-600 bg-teal-800 px-3 py-1.5 text-xs font-semibold text-white hover:bg-teal-700 whitespace-nowrap"
            >
              TUTUP MODE GURU
            </button>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-3 py-5 sm:px-6 sm:py-8">
          <TeacherDashboard
            session={activeOrInspectionSession}
            questions={PHYSICS_QUESTIONS}
            answerKeys={ANSWER_KEYS}
            explanations={FULL_EXPLANATIONS}
            summary={gradingSummary}
            onExitTeacherMode={() => setIsTeacherAuthenticated(false)}
          />
          <div className="min-h-[240px]" aria-hidden="true" />
        </main>
      </div>
    );
  }

  // Login screen when no active student
  if (!session) {
    return (
      <>
        <LoginScreen
          onLogin={handleLogin}
          onOpenTeacherModal={() => setIsTeacherModalOpen(true)}
        />
        <TeacherPasswordModal
          isOpen={isTeacherModalOpen}
          onCancel={() => setIsTeacherModalOpen(false)}
          onSuccess={() => {
            setIsTeacherModalOpen(false);
            setIsTeacherAuthenticated(true);
          }}
        />
      </>
    );
  }

  const isSubmitted = session.status === 'Selesai Mengerjakan';
  const currentQuestion =
    PHYSICS_QUESTIONS[session.currentQuestionIndex] ?? PHYSICS_QUESTIONS[0];
  const answeredCount = PHYSICS_QUESTIONS.filter((q) =>
    isQuestionAnswered(q, session.answers[q.id])
  ).length;
  const unansweredCount = PHYSICS_QUESTIONS.length - answeredCount;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <TopQuizHeader
        student={session.student}
        questions={PHYSICS_QUESTIONS}
        answers={session.answers}
        currentIndex={session.currentQuestionIndex}
        isSubmitted={isSubmitted}
        isTeacherMode={isTeacherAuthenticated}
        onSelectQuestion={handleSelectQuestion}
        onPrev={handlePrev}
        onNext={handleNext}
        onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
        onOpenResetModal={() => setIsResetModalOpen(true)}
        onOpenTeacherModal={() => {
          if (isTeacherAuthenticated) {
            setIsTeacherAuthenticated(false);
          } else {
            setIsTeacherModalOpen(true);
          }
        }}
        onLogout={handleLogout}
      />

      <main className="mx-auto max-w-5xl px-2.5 py-4 sm:px-6 sm:py-6">
        {isTeacherAuthenticated ? (
          <TeacherDashboard
            session={session}
            questions={PHYSICS_QUESTIONS}
            answerKeys={ANSWER_KEYS}
            explanations={FULL_EXPLANATIONS}
            summary={gradingSummary}
            onExitTeacherMode={() => setIsTeacherAuthenticated(false)}
          />
        ) : isSubmitted && postSubmitView === 'summary' ? (
          <ResultSummary
            session={session}
            summary={gradingSummary}
            onReviewLockedQuestion={(idx) => handleSelectQuestion(idx)}
          />
        ) : (
          <div className="space-y-4">
            {isSubmitted && (
              <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-teal-200 bg-white px-4 py-3 shadow-sm">
                <span className="text-xs font-semibold text-teal-900">
                  Anda sedang meninjau jawaban terkunci.
                </span>
                <button
                  type="button"
                  onClick={() => setPostSubmitView('summary')}
                  className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg bg-teal-700 px-3 py-1.5 text-xs font-bold text-white hover:bg-teal-800 whitespace-nowrap"
                >
                  <Award className="h-3.5 w-3.5 shrink-0" />
                  <span>LIHAT RINGKASAN HASIL</span>
                </button>
              </div>
            )}

            <QuestionCard
              question={currentQuestion}
              answer={session.answers[currentQuestion.id]}
              isLocked={isSubmitted}
              onChangeAnswer={handleAnswerChange}
            />
          </div>
        )}

        {/* Zona aman kosong di bagian paling bawah: tanpa teks panjang, tombol, ikon, tautan, atau elemen interaktif */}
        <div className="min-h-[260px] w-full" aria-hidden="true" />
      </main>

      {/* Top-positioned confirmation modals */}
      <SubmitConfirmationModal
        isOpen={isSubmitModalOpen}
        answeredCount={answeredCount}
        unansweredCount={unansweredCount}
        onCancel={() => setIsSubmitModalOpen(false)}
        onConfirm={handleConfirmSubmit}
      />

      <ResetConfirmationModal
        isOpen={isResetModalOpen}
        studentName={session.student.fullName}
        onCancel={() => setIsResetModalOpen(false)}
        onConfirm={handleConfirmReset}
      />

      <TeacherPasswordModal
        isOpen={isTeacherModalOpen}
        onCancel={() => setIsTeacherModalOpen(false)}
        onSuccess={() => {
          setIsTeacherModalOpen(false);
          setIsTeacherAuthenticated(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
