import { LangSwitcher } from '@/components/lang-switcher';
import { useTranslation } from '@/hooks/use-translation';
import { Head } from '@inertiajs/react';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <Head title="home" />

      {t('I want to eat fried chicken.')}

      <hr className="my-6" />

      <LangSwitcher />
    </div>
  );
}
