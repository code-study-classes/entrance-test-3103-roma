import { observer } from 'mobx-react-lite';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { getRoutes } from '../routes';
import { bookingStore } from '../stores/bookingStore';

export const HotelsPage = observer(() => {
  const navigate = useNavigate();
  const { t } = useTranslation('buttons');

  return (
    <Container className='h-100 my-4'>
      <Row className='mb-3'>
        <Col>
          <Button onClick={() => navigate(getRoutes.createHotelPagePath())} variant='outline-secondary'>
            {t('createHotel')}
          </Button>
        </Col>
      </Row>
      <Row className='flex-md-row'>
        {bookingStore.hotels.map(hotel => (
          <Col md={6} xs={12} key={hotel.id} className='mb-4'>
            <Card className='shadow' style={{ cursor: 'pointer' }} onClick={() => navigate(getRoutes.hotelPagePath(hotel.id))}>
              <Card.Body>
                <Card.Title>{hotel.name}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>{hotel.region}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
});
