import i18next from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import resources from './locales/index';
import { AppRoutes } from './AppRoutes';

export const Init = () => {
  const lng = localStorage.getItem('lng') || 'ru';

  const i18n = i18next.createInstance();
  i18n.use(initReactI18next).init({
    resources,
    fallbackLng: lng,
    interpolation: {
      escapeValue: false,
    },
  });

  return (
    <I18nextProvider i18n={i18n}>
      <AppRoutes />
    </I18nextProvider>
  );
};
