import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DogSitterWhereUniqueInput } from "../dogSitter/DogSitterWhereUniqueInput";

export type ReviewWhereInput = {
  id?: StringFilter;
  rating?: FloatNullableFilter;
  comment?: StringNullableFilter;
  client?: ClientWhereUniqueInput;
  dogSitter?: DogSitterWhereUniqueInput;
};
