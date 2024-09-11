import type { Booking } from '../types/booking';

export const initialBookings: Booking[] = [
  {
    id: '1',
    hotelID: '1',
    orderDate: new Date('2024-09-01'),
    roomID: '2',
    payerID: '1',
    guestsIDs: ['1', '2'],
    checkInDate: new Date('2024-09-10'),
    checkOutDate: new Date('2024-09-15'),
  },
  {
    id: '2',
    hotelID: '1',
    orderDate: new Date('2024-09-05'),
    roomID: '4',
    payerID: '2',
    guestsIDs: ['3'],
    checkInDate: new Date('2024-09-12'),
    checkOutDate: new Date('2024-09-18'),
  },
  {
    id: '3',
    hotelID: '2',
    orderDate: new Date('2024-08-25'),
    roomID: '7',
    payerID: '3',
    guestsIDs: ['4', '5'],
    checkInDate: new Date('2024-09-02'),
    checkOutDate: new Date('2024-09-09'),
  },
  {
    id: '4',
    hotelID: '2',
    orderDate: new Date('2024-09-07'),
    roomID: '9',
    payerID: '4',
    guestsIDs: ['6'],
    checkInDate: new Date('2024-09-15'),
    checkOutDate: new Date('2024-09-20'),
  },
  {
    id: '5',
    hotelID: '3',
    orderDate: new Date('2024-09-03'),
    roomID: '12',
    payerID: '5',
    guestsIDs: ['7', '8', '9'],
    checkInDate: new Date('2024-09-10'),
    checkOutDate: new Date('2024-09-18'),
  },
  {
    id: '6',
    hotelID: '4',
    orderDate: new Date('2024-08-20'),
    roomID: '17',
    payerID: '2',
    guestsIDs: ['1', '3'],
    checkInDate: new Date('2024-08-25'),
    checkOutDate: new Date('2024-09-01'),
  },
];
