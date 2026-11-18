import React from 'react';
import { AlertCircle, CheckCircle2, Info, Lock } from 'lucide-react';
import type {
  PhysicsQuestion,
  StudentAnswerValue,
} from '../types/quiz';
import { validateNumericInput } from '../utils/grading';
import { MathText } from './MathText';
import { NarratorBar } from './NarratorBar';
import { StimulusDiagram } from './StimulusDiagram';

interface QuestionCardProps {
  question: PhysicsQuestion;
  answer: StudentAnswerValue | undefined;
  isLocked: boolean;
  onChangeAnswer: (questionId: number, value: StudentAnswerValue) => void;
}

function buildQuestionSpeechText(question: PhysicsQuestion): string {
  const parts: string[] = [
    `Soal nomor ${question.id}. ${question.kindLabel}. ${question.stimulusTitle}.`,
    question.stimulusText,
    question.prompt,
  ];

  if (question.options && question.options.length > 0) {
    parts.push('Pilihan jawaban:');
    for (const opt of question.options) {
      parts.push(`Pilihan ${opt.label}. ${opt.text}`);
    }
  }

  if (question.statements && question.statements.length > 0) {
    parts.push('Pernyataan yang harus dinilai benar atau salah:');
    for (const st of question.statements) {
      parts.push(`Pernyataan ${st.id}. ${st.text}`);
    }
  }

  if (question.unit) {
    parts.push(`Satuan jawaban yang diminta adalah ${question.unit}.`);
  }

  return parts.join(' ');
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  answer,
  isLocked,
  onChangeAnswer,
}) => {
  const numericRaw = typeof answer === 'string' ? answer : '';
  const numericValidation =
    question.kind === 'numeric' ? validateNumericInput(numericRaw) : null;

  const handleComplexToggle = (optionId: string) => {
    if (isLocked) return;
    const current = Array.isArray(answer) ? answer : [];
    const exists = current.includes(optionId);
    const updated = exists
      ? current.filter((id) => id !== optionId)
      : [...current, optionId];
    onChangeAnswer(question.id, updated);
  };

  const handleTrueFalseChange = (statementId: string, val: boolean | null) => {
    if (isLocked) return;
    const current =
      answer && typeof answer === 'object' && !Array.isArray(answer)
        ? (answer as Record<string, boolean | null>)
        : {};
    onChangeAnswer(question.id, {
      ...current,
      [statementId]: val,
    });
  };

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      {/* Unboxed metadata header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-teal-800">
          <span>Soal {question.id} dari 10</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>{question.kindLabel}</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span className="text-slate-600">{question.topic}</span>
        </div>
        <span className="text-xs font-semibold text-slate-500 tabular-nums">
          Bobot Maksimal {question.maxScore} Poin
        </span>
      </div>

      {isLocked && (
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-teal-200 bg-teal-50 px-3.5 py-2.5 text-xs font-semibold text-teal-900">
          <Lock className="h-4 w-4 shrink-0 text-teal-700" />
          <span>
            Status: SELESAI MENGERJAKAN — Jawaban telah dikumpulkan dan dikunci.
          </span>
        </div>
      )}

      {/* MR JO Voice Narrator */}
      <div className="mt-4">
        <NarratorBar
          mode="question"
          speechText={buildQuestionSpeechText(question)}
        />
      </div>

      {/* Stimulus Section */}
      <div className="mt-5 space-y-3">
        <h2 className="text-base font-bold text-slate-900 sm:text-lg">
          {question.stimulusTitle}
        </h2>
        <p className="text-sm leading-relaxed text-slate-700 sm:text-[15px]">
          <MathText text={question.stimulusText} />
        </p>

        {question.dataTable && question.dataTable.length > 0 && (
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <tbody className="divide-y divide-slate-200">
                {question.dataTable.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50/60' : 'bg-white'}>
                    <th className="px-3 py-2 font-semibold text-slate-700">
                      <MathText text={row.label} />
                    </th>
                    <td className="px-3 py-2 font-medium text-slate-900 tabular-nums">
                      <MathText text={row.value} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <StimulusDiagram questionId={question.id} />
      </div>

      {/* Prompt */}
      <div className="mt-5 border-t border-slate-100 pt-4">
        <p className="text-sm font-bold leading-relaxed text-slate-900 sm:text-base">
          <MathText text={question.prompt} />
        </p>
      </div>

      {/* Answer Input Area */}
      <div className="mt-4">
        {/* PG Biasa (1-2) */}
        {question.kind === 'pg' && question.options && (
          <div role="radiogroup" aria-label={`Pilihan jawaban soal ${question.id}`} className="space-y-2.5">
            {question.options.map((opt) => {
              const selected = answer === opt.id;
              return (
                <label
                  key={opt.id}
                  className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 transition-colors ${
                    selected
                      ? 'border-teal-700 bg-teal-50/70 text-slate-900'
                      : 'border-slate-200 bg-white text-slate-800 hover:border-teal-300 hover:bg-slate-50'
                  } ${isLocked ? 'cursor-not-allowed opacity-85' : ''}`}
                >
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={opt.id}
                    checked={selected}
                    disabled={isLocked}
                    onChange={() => onChangeAnswer(question.id, opt.id)}
                    className="mt-1 h-4 w-4 shrink-0 accent-teal-700"
                  />
                  <span className="text-sm leading-relaxed">
                    <strong className="mr-1.5 font-bold text-teal-900">{opt.label}.</strong>
                    <MathText text={opt.text} />
                  </span>
                </label>
              );
            })}
          </div>
        )}

        {/* PG Kompleks (3-4) */}
        {question.kind === 'pg_complex' && question.options && (
          <div className="space-y-2.5">
            <p className="text-xs font-medium text-slate-600">
              Anda dapat memilih lebih dari satu pernyataan (skor 10 jika seluruh pilihan tepat, 0 jika ada satu saja kesalahan).
            </p>
            {question.options.map((opt) => {
              const currentList = Array.isArray(answer) ? answer : [];
              const checked = currentList.includes(opt.id);
              return (
                <label
                  key={opt.id}
                  className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 transition-colors ${
                    checked
                      ? 'border-teal-700 bg-teal-50/70 text-slate-900'
                      : 'border-slate-200 bg-white text-slate-800 hover:border-teal-300 hover:bg-slate-50'
                  } ${isLocked ? 'cursor-not-allowed opacity-85' : ''}`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    disabled={isLocked}
                    onChange={() => handleComplexToggle(opt.id)}
                    className="mt-1 h-4 w-4 shrink-0 rounded accent-teal-700"
                  />
                  <span className="text-sm leading-relaxed">
                    <strong className="mr-1.5 font-bold text-teal-900">Pernyataan {opt.label}.</strong>
                    <MathText text={opt.text} />
                  </span>
                </label>
              );
            })}
          </div>
        )}

        {/* Benar / Salah (5) */}
        {question.kind === 'true_false' && question.statements && (
          <div className="space-y-3">
            {question.statements.map((stmt) => {
              const ansObj =
                answer && typeof answer === 'object' && !Array.isArray(answer)
                  ? (answer as Record<string, boolean | null>)
                  : {};
              const val = ansObj[stmt.id] ?? null;

              return (
                <div
                  key={stmt.id}
                  className="rounded-xl border border-slate-200 bg-slate-50/50 p-3.5"
                >
                  <p className="text-sm leading-relaxed text-slate-800">
                    <strong className="mr-1.5 font-bold text-teal-900">
                      Pernyataan {stmt.id}.
                    </strong>
                    <MathText text={stmt.text} />
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      disabled={isLocked}
                      onClick={() => handleTrueFalseChange(stmt.id, true)}
                      aria-pressed={val === true}
                      className={`min-h-[38px] rounded-lg border px-3.5 py-1.5 text-xs font-bold transition-colors ${
                        val === true
                          ? 'border-teal-800 bg-teal-700 text-white'
                          : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                      } disabled:cursor-not-allowed disabled:opacity-70`}
                    >
                      Benar
                    </button>
                    <button
                      type="button"
                      disabled={isLocked}
                      onClick={() => handleTrueFalseChange(stmt.id, false)}
                      aria-pressed={val === false}
                      className={`min-h-[38px] rounded-lg border px-3.5 py-1.5 text-xs font-bold transition-colors ${
                        val === false
                          ? 'border-teal-800 bg-teal-700 text-white'
                          : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                      } disabled:cursor-not-allowed disabled:opacity-70`}
                    >
                      Salah
                    </button>
                    {val !== null && !isLocked && (
                      <button
                        type="button"
                        onClick={() => handleTrueFalseChange(stmt.id, null)}
                        className="min-h-[38px] rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                      >
                        Kosongkan (0 poin)
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Isian Singkat Matematis (6-10) */}
        {question.kind === 'numeric' && (
          <div className="space-y-4">
            {/* Tutorial Pengisian BEFORE input */}
            {question.tutorial && (
              <div className="rounded-xl border border-teal-200 bg-teal-50/50 p-3.5 sm:p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-teal-900">
                  <Info className="h-4 w-4 shrink-0 text-teal-700" />
                  <span>Tutorial Pengisian Jawaban Numerik</span>
                </div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-relaxed text-slate-700">
                  {question.tutorial.rules.map((rule, i) => (
                    <li key={i}>{rule}</li>
                  ))}
                </ul>
                <p className="mt-2 rounded-lg border border-teal-200/80 bg-white px-3 py-2 text-xs text-slate-700">
                  <strong>Contoh format netral:</strong> {question.tutorial.neutralExample}
                </p>
              </div>
            )}

            <div>
              <label
                htmlFor={`numeric-input-${question.id}`}
                className="block text-sm font-semibold text-slate-800"
              >
                Jawaban Numerik Anda
              </label>
              <div className="mt-1.5 flex flex-wrap items-center gap-2.5">
                <input
                  id={`numeric-input-${question.id}`}
                  type="text"
                  inputMode="decimal"
                  disabled={isLocked}
                  value={numericRaw}
                  onChange={(e) => onChangeAnswer(question.id, e.target.value)}
                  placeholder={question.inputPlaceholder ?? 'Contoh: 12.5'}
                  className={`font-mono-tabular min-h-[46px] w-full max-w-[240px] rounded-xl border px-3.5 py-2.5 text-base font-semibold text-slate-900 focus:outline-none focus:ring-2 ${
                    numericValidation?.state === 'invalid'
                      ? 'border-red-400 bg-red-50/40 focus:border-red-600 focus:ring-red-500/20'
                      : numericValidation?.state === 'valid'
                        ? 'border-teal-600 bg-teal-50/30 focus:border-teal-700 focus:ring-teal-700/20'
                        : 'border-slate-300 bg-white focus:border-teal-700 focus:ring-teal-700/20'
                  } disabled:cursor-not-allowed disabled:bg-slate-100`}
                />
                {question.unit && (
                  <span className="text-sm font-bold text-slate-700">
                    {question.unit}
                  </span>
                )}
              </div>

              {numericValidation?.state === 'invalid' && (
                <div
                  role="alert"
                  className="mt-2 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-800"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-700" />
                  <span>{numericValidation.message}</span>
                </div>
              )}

              {numericValidation?.state === 'valid' && (
                <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-teal-800">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-700" />
                  <span>Format angka valid dan siap dinilai.</span>
                </div>
              )}

              {numericValidation?.state === 'empty' && (
                <p className="mt-2 text-xs text-slate-500">
                  Status: Jawaban masih kosong.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
