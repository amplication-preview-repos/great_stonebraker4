import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";

export type DogSitterWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  rating?: FloatNullableFilter;
  reviews?: ReviewListRelationFilter;
  bookings?: BookingListRelationFilter;
};
