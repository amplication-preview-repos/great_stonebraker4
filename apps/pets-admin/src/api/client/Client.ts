import { Booking } from "../booking/Booking";
import { Review } from "../review/Review";
import { Dog } from "../dog/Dog";

export type Client = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
  bookings?: Array<Booking>;
  reviews?: Array<Review>;
  dogs?: Array<Dog>;
};
