/**
 * Converts LaTeX / physics mathematical expressions into natural spoken Indonesian
 * so Web Speech API narrates formulas cleanly without reading raw backslashes or symbols.
 */
export function mathToIndonesianSpeech(input: string): string {
  let text = input;

  // Strip display/inline delimiters while keeping content
  text = text.replace(/\$\$/g, ' ').replace(/\$/g, ' ');

  // Replace common LaTeX commands before stripping braces
  const replacements: Array<[RegExp, string]> = [
    [/\\text\{m\/s\}\^2/g, 'meter per sekon kuadrat'],
    [/\\text\{rad\/s\}\^2/g, 'radian per sekon kuadrat'],
    [/\\text\{m\/s\}/g, 'meter per sekon'],
    [/\\text\{rad\/s\}/g, 'radian per sekon'],
    [/\\text\{kg\}\s*\\cdot\s*\\text\{m\}\^2/g, 'kilogram meter kuadrat'],
    [/\\text\{N\}\s*\\cdot\s*\\text\{m\}/g, 'newton meter'],
    [/\\text\{kg\}/g, 'kilogram'],
    [/\\text\{m\}/g, 'meter'],
    [/\\text\{N\}/g, 'newton'],
    [/\\text\{J\}/g, 'joule'],
    [/\\text\{s\}/g, 'sekon'],
    [/\\text\{([^}]*)\}/g, ' $1 '],
    [/\\frac\{1\}\{2\}/g, 'setengah'],
    [/\\frac\{1\}\{3\}/g, 'sepertiga'],
    [/\\frac\{2\}\{3\}/g, 'dua per tiga'],
    [/\\frac\{2\}\{5\}/g, 'dua per lima'],
    [/\\frac\{3\}\{4\}/g, 'tiga per empat'],
    [/\\frac\{3\}\{5\}/g, 'tiga per lima'],
    [/\\frac\{3\}\{7\}/g, 'tiga per tujuh'],
    [/\\frac\{4\}\{3\}/g, 'empat per tiga'],
    [/\\frac\{5\}\{7\}/g, 'lima per tujuh'],
    [/\\frac\{([^}]*)\}\{([^}]*)\}/g, '$1 per $2'],
    [/\\sqrt\{([^}]*)\}/g, 'akar dari $1'],
    [/\\sin\s*/g, 'sinus '],
    [/\\cos\s*/g, 'kosinas '],
    [/\\tan\s*/g, 'tangen '],
    [/\\Sigma\s*/g, 'sigma '],
    [/\\Delta\s*/g, 'delta '],
    [/\\theta/g, 'teta'],
    [/\\alpha/g, 'alfa'],
    [/\\omega/g, 'omega'],
    [/\\tau/g, 'torsi'],
    [/\\mu_s/g, 'miu s'],
    [/\\mu/g, 'miu'],
    [/\\pi/g, 'pi'],
    [/\^\\circ/g, ' derajat'],
    [/\\circ/g, ' derajat'],
    [/\\implies/g, ' maka '],
    [/\\Rightarrow/g, ' maka '],
    [/\\approx/g, ' kira-kira sama dengan '],
    [/\\le/g, ' kurang dari atau sama dengan '],
    [/\\ge/g, ' lebih dari atau sama dengan '],
    [/\\ne/g, ' tidak sama dengan '],
    [/\\times/g, ' kali '],
    [/\\cdot/g, ' kali '],
    [/\\left\(/g, ' '],
    [/\\right\)/g, ' '],
    [/\\left\[/g, ' '],
    [/\\right\]/g, ' '],
    [/f_\{s,\\text\{maks\}\}/g, 'gaya gesek statis maksimum'],
    [/f_\{s,maks\}/g, 'gaya gesek statis maksimum'],
    [/f_s/g, 'f s'],
    [/F_\{maks\}/g, 'F maksimum'],
    [/\\tau_\{rem\}/g, 'torsi pengereman'],
    [/m_1/g, 'm satu'],
    [/m_2/g, 'm dua'],
    [/T_1/g, 'T satu'],
    [/T_2/g, 'T dua'],
    [/R_1/g, 'R satu'],
    [/R_2/g, 'R dua'],
    [/v_1/g, 'v satu'],
    [/v_2/g, 'v dua'],
    [/a_1/g, 'a satu'],
    [/a_2/g, 'a dua'],
    [/k_A/g, 'k A'],
    [/k_B/g, 'k B'],
    [/I_A/g, 'I A'],
    [/I_B/g, 'I B'],
    [/\^2/g, ' kuadrat'],
    [/\^3/g, ' pangkat tiga'],
    [/\{,\}/g, ' koma '],
  ];

  for (const [pattern, spoken] of replacements) {
    text = text.replace(pattern, spoken);
  }

  // Handle decimal commas in Indonesian numeric prose (e.g. 0,2 -> 0 koma 2)
  text = text.replace(/(\d),(\d)/g, '$1 koma $2');
  // Handle decimal dots in numeric answers (e.g. 14.4 -> 14 koma 4)
  text = text.replace(/(\d)\.(\d)/g, '$1 koma $2');

  // Common unit abbreviations when isolated
  text = text.replace(/\bm\/s²\b/g, 'meter per sekon kuadrat');
  text = text.replace(/\brad\/s²\b/g, 'radian per sekon kuadrat');
  text = text.replace(/\bm\/s\b/g, 'meter per sekon');
  text = text.replace(/\brad\/s\b/g, 'radian per sekon');
  text = text.replace(/\bkg·m²\b/g, 'kilogram meter kuadrat');
  text = text.replace(/\bN·m\b/g, 'newton meter');

  // Operators
  text = text
    .replace(/=/g, ' sama dengan ')
    .replace(/\+/g, ' ditambah ')
    .replace(/−/g, ' dikurangi ')
    .replace(/[{}]/g, ' ')
    .replace(/\\/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return text;
}
