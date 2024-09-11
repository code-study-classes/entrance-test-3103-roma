import { observer } from 'mobx-react-lite';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export const ThemeSwitcher = observer(() => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', theme);
    document.body.classList.remove(theme === 'dark' ? 'bg-light' : 'bg-dark');
    document.body.classList.add(theme === 'dark' ? 'bg-dark' : 'bg-light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
  return (
    <Button variant={theme} onClick={toggleTheme}>
      {theme === 'dark' ? <i className='bi bi-moon-stars-fill'></i> : <i className='bi bi-sun'></i>}
    </Button>
  );
});
