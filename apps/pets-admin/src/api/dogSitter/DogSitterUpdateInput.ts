import { ReviewUpdateManyWithoutDogSittersInput } from "./ReviewUpdateManyWithoutDogSittersInput";
import { BookingUpdateManyWithoutDogSittersInput } from "./BookingUpdateManyWithoutDogSittersInput";

export type DogSitterUpdateInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  rating?: number | null;
  reviews?: ReviewUpdateManyWithoutDogSittersInput;
  bookings?: BookingUpdateManyWithoutDogSittersInput;
};
