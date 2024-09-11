import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation('header');
  const currentLanguage = i18n.language;

  const toggleLanguage = (lng: string) => {
    localStorage.setItem('lng', lng);
    i18n.changeLanguage(lng);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle split as='span' style={{ cursor: 'pointer' }}>
        <i className='bi bi-translate'></i> {t(`${currentLanguage}`)}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => toggleLanguage('ru')}>{t('ru')}</Dropdown.Item>
        <Dropdown.Item onClick={() => toggleLanguage('en')}>{t('en')}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
