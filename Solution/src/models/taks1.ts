import { z } from 'zod';
import { regions } from '../data/task1/regions';

const RegionsSchema = z.enum(regions);

export const HotelSchema = z.object({
  id: z.string(),
  name: z.string().max(150),
  region: RegionsSchema,
});

export const RoomSchema = z.object({
  id: z.string(),
  hotelID: z.string(),
  number: z.string().max(10),
  category: z.enum(['Стандарт', 'Люкс', 'Апартаменты']),
  status: z.enum(['Свободен', 'Занят']).default('Свободен'),
  seatsCount: z.enum(['2', '4']).pipe(z.coerce.number())
})

export type Hotel = z.infer<typeof HotelSchema>;
export type Room = z.infer<typeof RoomSchema>;
