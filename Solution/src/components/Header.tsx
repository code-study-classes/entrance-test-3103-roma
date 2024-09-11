import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getRoutes } from '../routes';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header = () => {
  const { t } = useTranslation('header');

  return (
    <Navbar expand='sm' className='shadow-sm'>
      <Container>
        <Navbar.Brand as={Link} to={getRoutes.hotelsPagePath()}>
          {t('hotels')}
        </Navbar.Brand>
        <Navbar.Brand as={Link} to={getRoutes.bookingPagePath()}>
          {t('booking')}
        </Navbar.Brand>
        <Navbar.Collapse>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
