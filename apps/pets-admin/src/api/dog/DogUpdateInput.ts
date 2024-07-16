import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { BookingUpdateManyWithoutDogsInput } from "./BookingUpdateManyWithoutDogsInput";

export type DogUpdateInput = {
  name?: string | null;
  breed?: string | null;
  age?: number | null;
  client?: ClientWhereUniqueInput | null;
  bookings?: BookingUpdateManyWithoutDogsInput;
};
