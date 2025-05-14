import type React from 'react';
import { I18nProvider } from 'react-aria';

export function Providers({ children, locale }: { children: React.ReactNode; locale: string }) {
  return <I18nProvider locale={locale}>{children}</I18nProvider>;
}
