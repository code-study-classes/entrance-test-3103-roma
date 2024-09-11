import type { Hotel } from '../types/booking';
import { regions } from './regions';

export const initialHotels: Hotel[] = [
  {
    id: '1',
    name: 'Отель Москва',
    region: regions[77],
  },
  {
    id: '2',
    name: 'Отель Камчатка',
    region: regions[23],
  },
  {
    id: '3',
    name: 'Отель Пенза',
    region: regions[59],
  },
  {
    id: '4',
    name: 'Отель Свердлов',
    region: regions[66],
  },
];
