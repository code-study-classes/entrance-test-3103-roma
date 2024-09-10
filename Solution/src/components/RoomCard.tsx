import { useState } from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import type { Room } from '../models/taks1';

export const RoomCard = ({ room }: { room: Room }) => {
const [roomStatus, setRoomStatus] = useState(room.status);

  const toggleStatus = () => {
    setRoomStatus(prevStatus => (prevStatus === 'Свободен' ? 'Занят' : 'Свободен'));
  };

  return (
    <Col md={6}>
      <Card className="mb-2">
        <Card.Body>
          <Card.Title>Номер: {room.number}</Card.Title>
          <Card.Text>Категория: {room.category}</Card.Text>
          <Card.Text>Статус: {roomStatus}</Card.Text>
          <Card.Text>Кол-во мест: {room.seatsCount}</Card.Text>
          <Button variant="outline-secondary" onClick={toggleStatus}>
            {roomStatus === 'Свободен' ? 'Занять' : 'Освободить'}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
