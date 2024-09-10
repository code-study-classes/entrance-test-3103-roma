import { Card, Col, Container, Row } from 'react-bootstrap';
import { hotels } from '../data/task1/hotels';
import { rooms } from '../data/task1/rooms';
import { RoomCard } from '../components/RoomCard';

export const Hotels = () => {
  const getRoomsByHotelID = (hotelID: string) => {
    return rooms.filter(room => room.hotelID === hotelID);
  };

  return (
    <Container className='h-100 my-4'>
      <Row className='h-100 flex-md-row'>
        {hotels.map(hotel => (
          <Col key={hotel.id} md={6} className='mb-4'>
            <Card>
              <Card.Body>
                <Card.Title>{hotel.name}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>{hotel.region}</Card.Subtitle>
                <Card.Text>
                  <strong>Комнаты:</strong>
                </Card.Text>
                <Row>
                  {getRoomsByHotelID(hotel.id).map(room => (
                    <RoomCard key={room.id} room={room} />
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
