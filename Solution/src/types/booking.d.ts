import { regions } from '../data/regions';

export type Room = {
  id: string;
  hotelID: string;
  number: string;
  category: 'Стандарт' | 'Люкс' | 'Апартаменты';
  status: 'Свободен' | 'Занят';
  seats: 2 | 4;
};

export type Hotel = {
  id: string;
  name: string;
  region: (typeof regions)[number];
};

export type Guest = {
  id: string;
  name: string;
  phone: string;
};

export type Payer = {
  id: string;
  name: string;
  type: 'Физическое лицо' | 'Юридическое лицо';
};

export type Booking = {
  id: string;
  hotelID: string;
  orderDate: Date;
  roomID: string;
  payerID: string;
  guestsIDs: string[];
  checkInDate: Date;
  checkOutDate: Date;
};
