import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { getRoutes } from './routes';
import { Hotels } from './pages/Hotels';
import { Guests } from './pages/Guests';
import { NotFoundPage } from './pages/NotFoundPage';

export const App = () => {
  return (
    <div className='h-100'>
      <div className='d-flex flex-column h-100'>
        <Router>
          <Header />
          <Routes>
            <Route path={getRoutes.hotelsPagePath()} element={<Hotels />} />
            <Route path={getRoutes.guestsPagePath()} element={<Guests />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};
