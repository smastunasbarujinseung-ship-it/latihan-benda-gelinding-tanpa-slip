import test from 'node:test';
import assert from 'node:assert/strict';
import { PHYSICS_QUESTIONS } from '../data/questions';
import { ANSWER_KEYS } from '../data/answerKeyAndExplanations';
import {
  calculateNormalizedScore,
  gradeAssessment,
  gradeQuestion,
  validateNumericInput,
} from './grading';
import { mathToIndonesianSpeech } from './mathToSpeech';

test('validateNumericInput handles empty, valid decimals, and invalid formats', () => {
  assert.equal(validateNumericInput('').state, 'empty');
  assert.equal(validateNumericInput('   ').state, 'empty');

  const valid1 = validateNumericInput('14.4');
  assert.equal(valid1.state, 'valid');
  if (valid1.state === 'valid') assert.equal(valid1.value, 14.4);

  const validNeg = validateNumericInput('-3.5');
  assert.equal(validNeg.state, 'valid');
  if (validNeg.state === 'valid') assert.equal(validNeg.value, -3.5);

  assert.equal(validateNumericInput('14,4').state, 'invalid');
  assert.equal(validateNumericInput('3 m/s2').state, 'invalid');
  assert.equal(validateNumericInput('1,000').state, 'invalid');
  assert.equal(validateNumericInput('abc').state, 'invalid');
  assert.equal(validateNumericInput('3/4').state, 'invalid');
});

test('Question 1 and 2 (Single Choice PG) grade 10 or 0', () => {
  const q1 = PHYSICS_QUESTIONS[0];
  const q2 = PHYSICS_QUESTIONS[1];

  assert.equal(gradeQuestion(q1, 'A', ANSWER_KEYS[1]).rawScore, 10);
  assert.equal(gradeQuestion(q1, 'B', ANSWER_KEYS[1]).rawScore, 0);
  assert.equal(gradeQuestion(q1, undefined, ANSWER_KEYS[1]).rawScore, 0);

  assert.equal(gradeQuestion(q2, 'B', ANSWER_KEYS[2]).rawScore, 10);
  assert.equal(gradeQuestion(q2, 'A', ANSWER_KEYS[2]).rawScore, 0);
});

test('Question 3 and 4 (Complex PG) enforce strict all-or-nothing scoring', () => {
  const q3 = PHYSICS_QUESTIONS[2];
  const q4 = PHYSICS_QUESTIONS[3];

  assert.equal(gradeQuestion(q3, ['1', '2', '4'], ANSWER_KEYS[3]).rawScore, 10);
  assert.equal(gradeQuestion(q3, ['4', '1', '2'], ANSWER_KEYS[3]).rawScore, 10);
  assert.equal(gradeQuestion(q3, ['1', '2'], ANSWER_KEYS[3]).rawScore, 0);
  assert.equal(gradeQuestion(q3, ['1', '2', '3', '4'], ANSWER_KEYS[3]).rawScore, 0);

  assert.equal(gradeQuestion(q4, ['1', '2', '3'], ANSWER_KEYS[4]).rawScore, 10);
  assert.equal(gradeQuestion(q4, ['1', '2', '3', '4'], ANSWER_KEYS[4]).rawScore, 0);
});

test('Question 5 (True/False) scores +2.5, -1, and 0 down to -4 minimum', () => {
  const q5 = PHYSICS_QUESTIONS[4];

  // All 4 correct -> +10
  assert.equal(
    gradeQuestion(q5, { '1': true, '2': false, '3': true, '4': false }, ANSWER_KEYS[5]).rawScore,
    10
  );

  // All 4 wrong -> -4
  assert.equal(
    gradeQuestion(q5, { '1': false, '2': true, '3': false, '4': true }, ANSWER_KEYS[5]).rawScore,
    -4
  );

  // 2 correct, 1 wrong, 1 blank -> +2.5 + 2.5 - 1 + 0 = 4
  assert.equal(
    gradeQuestion(q5, { '1': true, '2': true, '3': true, '4': null }, ANSWER_KEYS[5]).rawScore,
    4
  );
});

test('Questions 6-10 (Numeric) verify exact physics answers and tolerances', () => {
  assert.equal(gradeQuestion(PHYSICS_QUESTIONS[5], '3', ANSWER_KEYS[6]).rawScore, 10);
  assert.equal(gradeQuestion(PHYSICS_QUESTIONS[5], '3.00', ANSWER_KEYS[6]).rawScore, 10);
  assert.equal(gradeQuestion(PHYSICS_QUESTIONS[5], '3.5', ANSWER_KEYS[6]).rawScore, 0);

  assert.equal(gradeQuestion(PHYSICS_QUESTIONS[6], '14.4', ANSWER_KEYS[7]).rawScore, 10);
  assert.equal(gradeQuestion(PHYSICS_QUESTIONS[6], '14.35', ANSWER_KEYS[7]).rawScore, 10);

  assert.equal(gradeQuestion(PHYSICS_QUESTIONS[7], '4.5', ANSWER_KEYS[8]).rawScore, 10);
  assert.equal(gradeQuestion(PHYSICS_QUESTIONS[8], '0.75', ANSWER_KEYS[9]).rawScore, 10);
  assert.equal(gradeQuestion(PHYSICS_QUESTIONS[9], '6', ANSWER_KEYS[10]).rawScore, 10);
});

test('calculateNormalizedScore clamps negative raw totals to 0 and max to 100', () => {
  assert.equal(calculateNormalizedScore(-4), 0);
  assert.equal(calculateNormalizedScore(0), 0);
  assert.equal(calculateNormalizedScore(76.5), 76.5);
  assert.equal(calculateNormalizedScore(100), 100);
  assert.equal(calculateNormalizedScore(110), 100);
});

test('gradeAssessment computes full perfect score = 100 and negative Q5 clamping', () => {
  const perfectAnswers = {
    1: 'A',
    2: 'B',
    3: ['1', '2', '4'],
    4: ['1', '2', '3'],
    5: { '1': true, '2': false, '3': true, '4': false },
    6: '3',
    7: '14.4',
    8: '4.5',
    9: '0.75',
    10: '6',
  };

  const perfectSummary = gradeAssessment(
    PHYSICS_QUESTIONS,
    perfectAnswers,
    ANSWER_KEYS,
    '2026-11-18T08:00:00.000Z',
    '2026-11-18T08:12:30.000Z'
  );
  assert.equal(perfectSummary.totalRawScore, 100);
  assert.equal(perfectSummary.normalizedFinalScore, 100);
  assert.equal(perfectSummary.answeredCount, 10);
  assert.equal(perfectSummary.unansweredCount, 0);
  assert.equal(perfectSummary.durationSeconds, 750);

  // Only Q5 answered, all wrong -> raw = -4, normalized = 0
  const negSummary = gradeAssessment(
    PHYSICS_QUESTIONS,
    { 5: { '1': false, '2': true, '3': false, '4': true } },
    ANSWER_KEYS,
    '2026-11-18T08:00:00.000Z',
    '2026-11-18T08:01:00.000Z'
  );
  assert.equal(negSummary.totalRawScore, -4);
  assert.equal(negSummary.normalizedFinalScore, 0);
  assert.equal(negSummary.answeredCount, 1);
  assert.equal(negSummary.unansweredCount, 9);
});

test('mathToIndonesianSpeech converts physics LaTeX cleanly without backslashes', () => {
  const spoken = mathToIndonesianSpeech('$I = \\frac{1}{2}MR^2$ dan $\\alpha = 30\\text{ rad/s}^2$');
  assert.equal(spoken.includes('\\'), false);
  assert.equal(spoken.includes('setengah'), true);
  assert.equal(spoken.includes('alfa'), true);
});
