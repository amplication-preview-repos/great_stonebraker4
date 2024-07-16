import { BookingCreateNestedManyWithoutClientsInput } from "./BookingCreateNestedManyWithoutClientsInput";
import { ReviewCreateNestedManyWithoutClientsInput } from "./ReviewCreateNestedManyWithoutClientsInput";
import { DogCreateNestedManyWithoutClientsInput } from "./DogCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  bookings?: BookingCreateNestedManyWithoutClientsInput;
  reviews?: ReviewCreateNestedManyWithoutClientsInput;
  dogs?: DogCreateNestedManyWithoutClientsInput;
};
