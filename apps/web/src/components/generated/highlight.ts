import { codeToHtml } from 'shiki';

const LANGS = [
  'tsx', 'ts', 'jsx', 'js', 'json', 'bash', 'yaml', 'html', 'css', 'python',
  'rust', 'go', 'java', 'sql', 'markdown',
] as const;

export type SampleLang = (typeof LANGS)[number];

export function langFor(index: number): SampleLang {
  return LANGS[index % LANGS.length];
}

export async function highlight(code: string, index = 0): Promise<string> {
  return codeToHtml(code, {
    lang: langFor(index),
    theme: index % 2 ? 'github-dark' : 'github-light',
  });
}
