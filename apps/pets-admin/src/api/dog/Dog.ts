import { Client } from "../client/Client";
import { Booking } from "../booking/Booking";

export type Dog = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  breed: string | null;
  age: number | null;
  client?: Client | null;
  bookings?: Array<Booking>;
};
