import { observer } from 'mobx-react-lite';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import { bookingStore } from '../stores/bookingStore';

export const BookingPage = observer(() => {
  return (
    <Container className='h-100 my-4'>
      <Row className='mb-3'>
        <Col>
          <h1>Свобоные номера</h1>
        </Col>
      </Row>
      <Row className='mb-3'>
        <Col sm={3} className='mb-3'>
          <Form.Group>
            <Form.Control type='date' />
          </Form.Group>
        </Col>
        <Col sm={3} className='mb-3'>
          <Form.Group>
            <Form.Control type='date' />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        {bookingStore.openRooms.map(room => (
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
