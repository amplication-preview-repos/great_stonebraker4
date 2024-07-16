import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DogWhereUniqueInput } from "../dog/DogWhereUniqueInput";
import { DogSitterWhereUniqueInput } from "../dogSitter/DogSitterWhereUniqueInput";

export type BookingWhereInput = {
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
  endTime?: DateTimeNullableFilter;
  client?: ClientWhereUniqueInput;
  dog?: DogWhereUniqueInput;
  dogSitter?: DogSitterWhereUniqueInput;
};
