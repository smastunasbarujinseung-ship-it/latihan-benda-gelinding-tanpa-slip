import React from 'react';
import katex from 'katex';

interface MathTextProps {
  text: string;
  className?: string;
}

/**
 * Renders prose containing inline ($...$) and display ($$...$$) LaTeX expressions
 * cleanly via KaTeX without leaking raw TeX syntax.
 */
export const MathText: React.FC<MathTextProps> = ({ text, className = '' }) => {
  const tokens: Array<{ type: 'text' | 'inline' | 'display'; value: string }> = [];
  let remaining = text;

  const pattern = /(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/;
  while (remaining.length > 0) {
    const match = pattern.exec(remaining);
    if (!match) {
      tokens.push({ type: 'text', value: remaining });
      break;
    }

    if (match.index > 0) {
      tokens.push({ type: 'text', value: remaining.slice(0, match.index) });
    }

    const rawMatch = match[0];
    if (rawMatch.startsWith('$$') && rawMatch.endsWith('$$')) {
      tokens.push({
        type: 'display',
        value: rawMatch.slice(2, -2).trim(),
      });
    } else {
      tokens.push({
        type: 'inline',
        value: rawMatch.slice(1, -1).trim(),
      });
    }

    remaining = remaining.slice(match.index + rawMatch.length);
  }

  return (
    <span className={className}>
      {tokens.map((tok, idx) => {
        if (tok.type === 'text') {
          return <React.Fragment key={idx}>{tok.value}</React.Fragment>;
        }

        const html = katex.renderToString(tok.value, {
          displayMode: tok.type === 'display',
          throwOnError: false,
          strict: false,
        });

        if (tok.type === 'display') {
          return (
            <span
              key={idx}
              className="block my-2 overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        }

        return (
          <span
            key={idx}
            className="inline-block align-baseline"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      })}
    </span>
  );
};
