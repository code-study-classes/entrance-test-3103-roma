import { observer } from 'mobx-react-lite';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { getRoutes } from './routes';
import { HotelPage } from './pages/HotelPage';
import { BookingPage } from './pages/BookingPage';
import { HotelsPage } from './pages/HotelsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { CreateHotelPage } from './pages/CreateHotelPage';

export const AppRoutes = observer(() => {
  return (
    <div className='h-100'>
      <div className='d-flex flex-column h-100'>
        <Router>
          <Header />
          <Routes>
            <Route path={getRoutes.hotelsPagePath()} element={<HotelsPage />} />
            <Route path={getRoutes.createHotelPagePath()} element={<CreateHotelPage />} />
            <Route path={getRoutes.bookingPagePath()} element={<BookingPage />} />
            <Route path='/:id' element={<HotelPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
});
