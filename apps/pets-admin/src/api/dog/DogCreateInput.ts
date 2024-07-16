import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { BookingCreateNestedManyWithoutDogsInput } from "./BookingCreateNestedManyWithoutDogsInput";

export type DogCreateInput = {
  name?: string | null;
  breed?: string | null;
  age?: number | null;
  client?: ClientWhereUniqueInput | null;
  bookings?: BookingCreateNestedManyWithoutDogsInput;
};
