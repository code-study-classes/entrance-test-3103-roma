import { makeAutoObservable } from 'mobx';
import type { Room, Hotel, Guest, Payer, Booking } from '../types/booking';

class BookingStore {
  constructor() {
    makeAutoObservable(this);
  }

  rooms: Room[] = [
    { id: '1', hotelID: '1', number: '101', category: 'Стандарт', status: 'Свободен', seats: 2 },
    { id: '2', hotelID: '1', number: '102', category: 'Люкс', status: 'Занят', seats: 2 },
    { id: '3', hotelID: '1', number: '103', category: 'Апартаменты', status: 'Свободен', seats: 4 },
    { id: '4', hotelID: '1', number: '104', category: 'Стандарт', status: 'Занят', seats: 2 },
    { id: '5', hotelID: '1', number: '105', category: 'Люкс', status: 'Свободен', seats: 2 },
    { id: '6', hotelID: '2', number: '201', category: 'Апартаменты', status: 'Свободен', seats: 4 },
    { id: '7', hotelID: '2', number: '202', category: 'Люкс', status: 'Занят', seats: 2 },
    { id: '8', hotelID: '2', number: '203', category: 'Стандарт', status: 'Свободен', seats: 2 },
    { id: '9', hotelID: '2', number: '204', category: 'Люкс', status: 'Занят', seats: 2 },
    { id: '10', hotelID: '2', number: '205', category: 'Апартаменты', status: 'Свободен', seats: 4 },
    { id: '11', hotelID: '3', number: '301', category: 'Стандарт', status: 'Свободен', seats: 2 },
    { id: '12', hotelID: '3', number: '302', category: 'Люкс', status: 'Занят', seats: 2 },
    { id: '13', hotelID: '3', number: '303', category: 'Апартаменты', status: 'Свободен', seats: 4 },
    { id: '14', hotelID: '3', number: '304', category: 'Люкс', status: 'Занят', seats: 2 },
    { id: '15', hotelID: '3', number: '305', category: 'Апартаменты', status: 'Свободен', seats: 4 },
    { id: '16', hotelID: '4', number: '401', category: 'Стандарт', status: 'Свободен', seats: 2 },
    { id: '17', hotelID: '4', number: '402', category: 'Апартаменты', status: 'Занят', seats: 4 },
    { id: '18', hotelID: '4', number: '403', category: 'Люкс', status: 'Свободен', seats: 2 },
    { id: '19', hotelID: '4', number: '404', category: 'Стандарт', status: 'Занят', seats: 2 },
    { id: '20', hotelID: '4', number: '405', category: 'Апартаменты', status: 'Свободен', seats: 4 },
  ];
  hotels: Hotel[] = [
    {
      id: '1',
      name: 'Отель Москва',
      region: 'г Москва',
    },
    {
      id: '2',
      name: 'Отель Камчатка',
      region: 'Камчатский край',
    },
    {
      id: '3',
      name: 'Отель Пенза',
      region: 'Пензенская обл',
    },
    {
      id: '4',
      name: 'Отель Свердлов',
      region: 'Свердловская обл',
    },
  ];
  guests: Guest[] = [];
  payers: Payer[] = [];
  bookings: Booking[] = [];

  getHotel = (hotelID: string) => {
    return this.hotels.find(hotel => hotel.id === hotelID);
  };

  getRoomsByHotelID = (hotelID: string) => {
    return this.rooms.filter(room => room.hotelID === hotelID);
  };

  changeRoomStatus = (roomID: string) => {
    this.rooms = this.rooms.map(room =>
      room.id === roomID ? { ...room, status: room.status === 'Занят' ? 'Свободен' : 'Занят' } : room,
    );
  };
}

export const bookingStore = new BookingStore();

//getRoomsByHotelId = (hotelId: string): Room[] => {
//  return this.rooms.filter(room => room.hotelID === hotelId);
//};
//
//};
