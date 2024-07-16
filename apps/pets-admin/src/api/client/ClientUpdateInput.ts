import { BookingUpdateManyWithoutClientsInput } from "./BookingUpdateManyWithoutClientsInput";
import { ReviewUpdateManyWithoutClientsInput } from "./ReviewUpdateManyWithoutClientsInput";
import { DogUpdateManyWithoutClientsInput } from "./DogUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  bookings?: BookingUpdateManyWithoutClientsInput;
  reviews?: ReviewUpdateManyWithoutClientsInput;
  dogs?: DogUpdateManyWithoutClientsInput;
};
