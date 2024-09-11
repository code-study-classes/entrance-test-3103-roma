import { observer } from 'mobx-react-lite';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { bookingStore } from '../stores/bookingStore';

export const HotelPage = observer(() => {
  const { pathname } = useLocation();
  const hotelID = pathname.replace('/', '');
  const hotel = bookingStore.getHotel(hotelID);
  const rooms = bookingStore.getRoomsByHotelID(hotel.id);

  return (
    <Container className='h-100 my-4'>
      <Row className='mb-3'>
        <Col>
          <h1>{hotel?.name}</h1>
          <h3 className='text-muted'>{hotel?.region}</h3>
        </Col>
      </Row>
      <Row>
        {rooms.map(room => (
          <Col lg={4} md={6} xs={12} key={room.id} className='mb-4'>
            <Card className='shadow d-flex flex-column h-100'>
              <Card.Body className='d-flex flex-column'>
                <Card.Title>{room.number}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  {room.category}, {room.seats} местa
                </Card.Subtitle>
                <div className='d-flex justify-content-between align-items-center'>
                  <Card.Text className={`${room.status === 'Свободен' ? 'text-success' : 'text-danger'}`}>
                    {room.status}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
});
