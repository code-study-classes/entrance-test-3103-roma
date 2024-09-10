import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

export const ThemeSwitcher = () => {
  const [activeTheme, setActiveTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', activeTheme);
    document.body.classList.remove('bg-light', 'bg-dark');
    document.body.classList.add(activeTheme === 'dark' ? 'bg-dark' : 'bg-light');
  }, [activeTheme]);

  const toggleTheme = () => {
    setActiveTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Button variant={activeTheme} onClick={toggleTheme}>
      {activeTheme === 'dark' ? <i className='bi bi-moon-stars-fill'></i> : <i className='bi bi-sun'></i>}
    </Button>
  );
};
