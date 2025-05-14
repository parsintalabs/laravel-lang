import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';

export function LangSwitcher() {
  const { locale_global } = usePage().props;
  const [lang, setLang] = useState<string>(locale_global as string);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const _lang = e.target.value;
    setLang(_lang);
    router.post('/set-locale', {
      lang: _lang,
    });
  };
  return (
    <select value={lang} onChange={handleChange}>
      <option value="id">🇮🇩 Bahasa</option>
      <option value="en">🇬🇧English</option>
      <option value="zh_CN">🇨🇳Chinese</option>
    </select>
  );
}
