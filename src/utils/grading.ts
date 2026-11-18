import type {
  AnswerKey,
  NumericValidationState,
  PhysicsQuestion,
  QuestionResultBreakdown,
  QuizGradingSummary,
  StudentAnswersMap,
  StudentAnswerValue,
} from '../types/quiz';

/**
 * Validates numeric input for Questions 6-10.
 * Enforces dot decimal separator, rejects commas, letters, units, or non-numeric symbols.
 */
export function validateNumericInput(raw: string | undefined): NumericValidationState {
  if (raw === undefined || raw.trim() === '') {
    return { state: 'empty', message: null };
  }

  const trimmed = raw.trim();

  if (trimmed.includes(',')) {
    return {
      state: 'invalid',
      message:
        'Format tidak valid: gunakan tanda titik (.) untuk desimal dan jangan gunakan koma sebagai pemisah desimal atau ribuan.',
    };
  }

  if (/[a-zA-Z°²³/^]/.test(trimmed)) {
    return {
      state: 'invalid',
      message:
        'Format tidak valid: masukkan hanya angka tanpa menuliskan satuan atau simbol matematika.',
    };
  }

  const strictNumberRegex = /^-?(?:\d+\.?\d*|\.\d+)$/;
  if (!strictNumberRegex.test(trimmed)) {
    return {
      state: 'invalid',
      message:
        'Format tidak valid: masukkan angka yang benar menggunakan titik sebagai pemisah desimal (contoh: 12.5).',
    };
  }

  const parsed = Number(trimmed);
  if (!Number.isFinite(parsed)) {
    return {
      state: 'invalid',
      message: 'Format tidak valid: nilai angka tidak terdefinisi.',
    };
  }

  return { state: 'valid', value: parsed, message: null };
}

/**
 * Checks whether a question currently has a recorded answer.
 */
export function isQuestionAnswered(
  question: PhysicsQuestion,
  answer: StudentAnswerValue | undefined
): boolean {
  if (answer === undefined || answer === null) return false;

  switch (question.kind) {
    case 'pg':
      return typeof answer === 'string' && answer.trim().length > 0;
    case 'pg_complex':
      return Array.isArray(answer) && answer.length > 0;
    case 'true_false': {
      if (typeof answer !== 'object' || Array.isArray(answer)) return false;
      const statements = question.statements ?? [];
      // Considered answered if at least one statement has been chosen
      return statements.some((s) => answer[s.id] === true || answer[s.id] === false);
    }
    case 'numeric': {
      if (typeof answer !== 'string') return false;
      return answer.trim().length > 0;
    }
    default:
      return false;
  }
}

/**
 * Normalizes raw score to [0, 100] using:
 * Nilai akhir = clamp((Total skor mentah / 100) * 100, 0, 100)
 */
export function calculateNormalizedScore(rawTotal: number): number {
  const scaled = (rawTotal / 100) * 100;
  const clamped = Math.max(0, Math.min(100, scaled));
  return Math.round(clamped * 100) / 100;
}

export function formatDurationIndonesian(secondsTotal: number): string {
  const safeSeconds = Math.max(0, Math.floor(secondsTotal));
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const seconds = safeSeconds % 60;

  if (hours > 0) {
    return `${hours} jam ${minutes} menit ${seconds} detik`;
  }
  if (minutes > 0) {
    return `${minutes} menit ${seconds} detik`;
  }
  return `${seconds} detik`;
}

export function gradeQuestion(
  question: PhysicsQuestion,
  answer: StudentAnswerValue | undefined,
  key: AnswerKey
): QuestionResultBreakdown {
  const answered = isQuestionAnswered(question, answer);

  if (question.kind === 'pg' && key.kind === 'pg') {
    const selected = typeof answer === 'string' ? answer : '';
    const isCorrect = answered && selected === key.correctOptionId;
    return {
      questionId: question.id,
      kind: question.kind,
      topic: question.topic,
      isAnswered: answered,
      isCorrect,
      rawScore: isCorrect ? 10 : 0,
      maxScore: 10,
      studentAnswerDisplay: answered ? `Opsi ${selected}` : 'Tidak dijawab',
      correctAnswerDisplay: key.displayKey,
      errorNote: !answered
        ? 'Murid tidak memilih jawaban.'
        : isCorrect
          ? null
          : `Murid memilih opsi ${selected}, kemungkinan keliru dalam menyusun persamaan translasi-rotasi katrol atau menentukan hubungan percepatan linear-sudut.`,
    };
  }

  if (question.kind === 'pg_complex' && key.kind === 'pg_complex') {
    const selectedArr = Array.isArray(answer) ? [...answer].sort() : [];
    const expectedArr = [...key.correctOptionIds].sort();
    const isExactMatch =
      answered &&
      selectedArr.length === expectedArr.length &&
      selectedArr.every((val, idx) => val === expectedArr[idx]);

    return {
      questionId: question.id,
      kind: question.kind,
      topic: question.topic,
      isAnswered: answered,
      isCorrect: isExactMatch,
      rawScore: isExactMatch ? 10 : 0,
      maxScore: 10,
      studentAnswerDisplay: answered
        ? selectedArr.map((id) => `Pernyataan ${id}`).join(', ')
        : 'Tidak dijawab',
      correctAnswerDisplay: key.displayKey,
      errorNote: !answered
        ? 'Murid tidak memilih pernyataan mana pun.'
        : isExactMatch
          ? null
          : 'Pilihan pernyataan belum tepat seluruhnya (penilaian all-or-nothing). Perlu penguatan analisis arah gaya gesek statis serta perbandingan torsi gaya luar dan gaya gesek.',
    };
  }

  if (question.kind === 'true_false' && key.kind === 'true_false') {
    const ansObj =
      answer && typeof answer === 'object' && !Array.isArray(answer)
        ? (answer as Record<string, boolean | null>)
        : {};
    const statements = question.statements ?? [];

    let questionScore = 0;
    let correctCount = 0;
    const details: QuestionResultBreakdown['trueFalseDetails'] = [];
    const displayParts: string[] = [];

    for (const stmt of statements) {
      const choice = ansObj[stmt.id] ?? null;
      const expected = key.correctMap[stmt.id];
      let pts = 0;
      if (choice === true || choice === false) {
        if (choice === expected) {
          pts = 2.5;
          correctCount += 1;
        } else {
          pts = -1;
        }
      }
      questionScore += pts;
      details.push({
        statementId: stmt.id,
        studentChoice: choice,
        correctChoice: expected,
        points: pts,
      });
      const label = choice === true ? 'Benar' : choice === false ? 'Salah' : 'Kosong';
      displayParts.push(`P${stmt.id}: ${label}`);
    }

    const isAllCorrect = correctCount === statements.length;

    return {
      questionId: question.id,
      kind: question.kind,
      topic: question.topic,
      isAnswered: answered,
      isCorrect: isAllCorrect,
      rawScore: questionScore,
      maxScore: 10,
      studentAnswerDisplay: answered ? displayParts.join(' | ') : 'Tidak dijawab',
      correctAnswerDisplay: key.displayKey,
      trueFalseDetails: details,
      errorNote: !answered
        ? 'Murid tidak mengisi pernyataan Benar/Salah.'
        : isAllCorrect
          ? null
          : 'Terdapat kekeliruan pada evaluasi konsep percepatan benda menggelinding $a = g\\sin\\theta / (1 + k)$ atau kekekalan energi mekanik.',
    };
  }

  if (question.kind === 'numeric' && key.kind === 'numeric') {
    const rawStr = typeof answer === 'string' ? answer : '';
    const validation = validateNumericInput(rawStr);

    if (validation.state === 'empty') {
      return {
        questionId: question.id,
        kind: question.kind,
        topic: question.topic,
        isAnswered: false,
        isCorrect: false,
        rawScore: 0,
        maxScore: 10,
        studentAnswerDisplay: 'Tidak dijawab',
        correctAnswerDisplay: key.displayKey,
        errorNote: 'Murid tidak mengisi jawaban numerik.',
      };
    }

    if (validation.state === 'invalid') {
      return {
        questionId: question.id,
        kind: question.kind,
        topic: question.topic,
        isAnswered: true,
        isCorrect: false,
        rawScore: 0,
        maxScore: 10,
        studentAnswerDisplay: `${rawStr} (Format tidak valid)`,
        correctAnswerDisplay: key.displayKey,
        errorNote: 'Format jawaban numerik tidak valid (kemungkinan menyertakan satuan atau koma).',
      };
    }

    const diff = Math.abs(validation.value - key.expected);
    const allowedTolerance = Math.max(
      key.absTolerance,
      Math.abs(key.expected) * key.relTolerance
    );
    const isCorrect = diff <= allowedTolerance + 1e-9;

    const unitSuffix = question.unit ? ` ${question.unit}` : '';
    return {
      questionId: question.id,
      kind: question.kind,
      topic: question.topic,
      isAnswered: true,
      isCorrect,
      rawScore: isCorrect ? 10 : 0,
      maxScore: 10,
      studentAnswerDisplay: `${validation.value}${unitSuffix}`,
      correctAnswerDisplay: key.displayKey,
      errorNote: isCorrect
        ? null
        : `Hasil hitungan murid (${validation.value}${unitSuffix}) berbeda dari nilai eksak (${key.displayKey}). Perlu pemeriksaan ulang pada arah gaya gesek statis, momen inersia, atau substitusi persamaan rotasi.`,
    };
  }

  return {
    questionId: question.id,
    kind: question.kind,
    topic: question.topic,
    isAnswered: false,
    isCorrect: false,
    rawScore: 0,
    maxScore: question.maxScore,
    studentAnswerDisplay: 'Tidak dijawab',
    correctAnswerDisplay: '-',
    errorNote: 'Data soal tidak cocok.',
  };
}

export function gradeAssessment(
  questions: PhysicsQuestion[],
  answers: StudentAnswersMap,
  answerKeys: Record<number, AnswerKey>,
  startedAtIso: string,
  endedAtIso: string
): QuizGradingSummary {
  const breakdown: QuestionResultBreakdown[] = [];
  let totalRawScore = 0;
  let answeredCount = 0;

  for (const q of questions) {
    const key = answerKeys[q.id];
    const result = gradeQuestion(q, answers[q.id], key);
    breakdown.push(result);
    totalRawScore += result.rawScore;
    if (result.isAnswered) answeredCount += 1;
  }

  // Round floating point noise (e.g. 2.5 + 2.5 - 1)
  totalRawScore = Math.round(totalRawScore * 100) / 100;
  const normalizedFinalScore = calculateNormalizedScore(totalRawScore);
  const unansweredCount = questions.length - answeredCount;

  const startMs = Date.parse(startedAtIso);
  const endMs = Date.parse(endedAtIso);
  const durationSeconds =
    Number.isFinite(startMs) && Number.isFinite(endMs) && endMs >= startMs
      ? Math.round((endMs - startMs) / 1000)
      : 0;

  const errorAnalysis: string[] = [];
  const incorrectItems = breakdown.filter((b) => !b.isCorrect);

  if (incorrectItems.length === 0) {
    errorAnalysis.push(
      'Murid menguasai seluruh konsep Hukum Newton II pada gerak rotasi dan menggelinding tanpa slip dengan sangat baik (skor sempurna).'
    );
  } else {
    const unansweredList = breakdown.filter((b) => !b.isAnswered).map((b) => b.questionId);
    if (unansweredList.length > 0) {
      errorAnalysis.push(
        `Terdapat ${unansweredList.length} soal yang belum dijawab (Soal nomor ${unansweredList.join(', ')}).`
      );
    }

    const pulleyErrors = incorrectItems.filter((b) => b.questionId <= 2);
    if (pulleyErrors.length > 0) {
      errorAnalysis.push(
        `Kesulitan pada dinamika katrol bermassa (Soal ${pulleyErrors.map((e) => e.questionId).join(', ')}): perlu penguatan bahwa tegangan tali di kedua sisi katrol bermassa tidak sama karena selisih tegangan tali menghasilkan torsi neto pada katrol.`
      );
    }

    const rollingForceErrors = incorrectItems.filter(
      (b) => b.questionId === 3 || b.questionId === 4 || b.questionId === 9
    );
    if (rollingForceErrors.length > 0) {
      errorAnalysis.push(
        `Kesulitan pada analisis gaya gesek statis dan titik kerja gaya (Soal ${rollingForceErrors.map((e) => e.questionId).join(', ')}): arah gaya gesek statis tidak selalu berlawanan dengan gerak pusat massa, melainkan ditentukan oleh kecenderungan slip di titik kontak dan dibandingkan terhadap batas f_s,maks.`
      );
    }

    const inclineErrors = incorrectItems.filter(
      (b) =>
        b.questionId === 5 ||
        b.questionId === 6 ||
        b.questionId === 7 ||
        b.questionId === 8 ||
        b.questionId === 10
    );
    if (inclineErrors.length > 0) {
      errorAnalysis.push(
        `Kesulitan pada benda menggelinding di bidang miring dan lintasan lanjutan (Soal ${inclineErrors.map((e) => e.questionId).join(', ')}): perhatikan pengaruh faktor momen inersia k = I/(mR²) terhadap percepatan dan analisis gabungan translasi-rotasi.`
      );
    }
  }

  return {
    totalRawScore,
    normalizedFinalScore,
    answeredCount,
    unansweredCount,
    breakdown,
    durationFormatted: formatDurationIndonesian(durationSeconds),
    durationSeconds,
    errorAnalysis,
  };
}
