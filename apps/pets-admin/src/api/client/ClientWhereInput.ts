import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { DogListRelationFilter } from "../dog/DogListRelationFilter";

export type ClientWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  bookings?: BookingListRelationFilter;
  reviews?: ReviewListRelationFilter;
  dogs?: DogListRelationFilter;
};
