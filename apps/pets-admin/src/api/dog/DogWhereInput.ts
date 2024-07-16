import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";

export type DogWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  breed?: StringNullableFilter;
  age?: IntNullableFilter;
  client?: ClientWhereUniqueInput;
  bookings?: BookingListRelationFilter;
};
