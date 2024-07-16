import { Review } from "../review/Review";
import { Booking } from "../booking/Booking";

export type DogSitter = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  phoneNumber: string | null;
  rating: number | null;
  reviews?: Array<Review>;
  bookings?: Array<Booking>;
};
