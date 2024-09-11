import { makeAutoObservable } from 'mobx';
import type { Room, Hotel, Guest, Payer, Booking } from '../types/booking';
import { initialRooms } from '../data/rooms';
import { initialHotels } from '../data/hotels';
import { initialGuests } from '../data/guests';
import { initialPayers } from '../data/payers';
import { initialBookings } from '../data/bookings';

class BookingStore {
  constructor() {
    makeAutoObservable(this);
  }

  rooms: Room[] = initialRooms;
  hotels: Hotel[] = initialHotels;
  guests: Guest[] = initialGuests;
  payers: Payer[] = initialPayers;
  bookings: Booking[] = initialBookings;

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

  get openRooms() {
    return this.rooms.filter(({ status }) => status === 'Свободен');
  }
}

export const bookingStore = new BookingStore();
