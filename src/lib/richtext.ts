/**
 * Minimal markdown-lite inline link syntax for plain-text data fields (FAQ
 * answers, etc.) that need an occasional link without switching the whole
 * field to raw HTML. Supports only `[label](href)` -- nothing else -- so
 * the data stays plain, readable text everywhere it isn't a link.
 */
export interface RichTextSegment {
  text: string;
  href?: string;
}

export function parseInlineLinks(input: string): RichTextSegment[] {
  const segments: RichTextSegment[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = re.exec(input))) {
    if (match.index > lastIndex) segments.push({ text: input.slice(lastIndex, match.index) });
    segments.push({ text: match[1], href: match[2] });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < input.length) segments.push({ text: input.slice(lastIndex) });
  return segments;
}
