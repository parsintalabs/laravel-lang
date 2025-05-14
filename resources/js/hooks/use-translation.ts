import { usePage } from '@inertiajs/react';

type Replace = Record<string, string | number>;

export function useTranslation() {
  const { language } = usePage<{ language: Record<string, string> }>().props;

  function t(key: string, replace: Replace = {}): string {
    let translation = language[key] ?? key;

    const keys = Object.keys(replace);
    for (let i = 0; i < keys.length; i++) {
      const replaceKey = keys[i];
      translation = translation.replace(new RegExp(`:${replaceKey}`, 'g'), String(replace[replaceKey]));
    }

    return translation;
  }

  return { t };
}
