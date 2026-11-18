import type { QuizSessionState, StudentIdentity } from '../types/quiz';

const ACTIVE_IDENTITY_KEY = 'fisika_rotasi_active_student_v1';
const PROGRESS_PREFIX = 'fisika_rotasi_progress_v1::';

export function makeStudentStorageKey(student: StudentIdentity): string {
  const normName = student.fullName.trim().toLowerCase().replace(/\s+/g, ' ');
  const normClass = student.className.trim().toLowerCase().replace(/\s+/g, ' ');
  return `${PROGRESS_PREFIX}${normName}::${normClass}`;
}

export function loadActiveStudent(): StudentIdentity | null {
  try {
    const raw = window.localStorage.getItem(ACTIVE_IDENTITY_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StudentIdentity>;
    if (
      typeof parsed.fullName === 'string' &&
      parsed.fullName.trim() !== '' &&
      typeof parsed.className === 'string' &&
      parsed.className.trim() !== ''
    ) {
      return {
        fullName: parsed.fullName.trim(),
        className: parsed.className.trim(),
      };
    }
    return null;
  } catch {
    return null;
  }
}

export function saveActiveStudent(student: StudentIdentity): void {
  try {
    window.localStorage.setItem(ACTIVE_IDENTITY_KEY, JSON.stringify(student));
  } catch {
    // Ignore storage quota errors cleanly
  }
}

export function clearActiveStudent(): void {
  try {
    window.localStorage.removeItem(ACTIVE_IDENTITY_KEY);
  } catch {
    // Ignore
  }
}

export function loadStudentSession(student: StudentIdentity): QuizSessionState | null {
  try {
    const key = makeStudentStorageKey(student);
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as QuizSessionState;
    if (!parsed || typeof parsed !== 'object' || !parsed.student) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function createFreshSession(student: StudentIdentity): QuizSessionState {
  const now = new Date().toISOString();
  return {
    student,
    answers: {},
    currentQuestionIndex: 0,
    startedAt: now,
    lastSavedAt: now,
    submittedAt: null,
    status: 'Sedang Mengerjakan',
  };
}

export function saveStudentSession(session: QuizSessionState): void {
  try {
    const key = makeStudentStorageKey(session.student);
    const toStore: QuizSessionState = {
      ...session,
      lastSavedAt: new Date().toISOString(),
    };
    window.localStorage.setItem(key, JSON.stringify(toStore));
  } catch {
    // Ignore storage quota errors
  }
}

export function resetStudentSession(student: StudentIdentity): QuizSessionState {
  const fresh = createFreshSession(student);
  saveStudentSession(fresh);
  return fresh;
}
