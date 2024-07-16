import { ReviewCreateNestedManyWithoutDogSittersInput } from "./ReviewCreateNestedManyWithoutDogSittersInput";
import { BookingCreateNestedManyWithoutDogSittersInput } from "./BookingCreateNestedManyWithoutDogSittersInput";

export type DogSitterCreateInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  rating?: number | null;
  reviews?: ReviewCreateNestedManyWithoutDogSittersInput;
  bookings?: BookingCreateNestedManyWithoutDogSittersInput;
};
