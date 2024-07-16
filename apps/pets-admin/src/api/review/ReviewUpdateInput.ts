import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DogSitterWhereUniqueInput } from "../dogSitter/DogSitterWhereUniqueInput";

export type ReviewUpdateInput = {
  rating?: number | null;
  comment?: string | null;
  client?: ClientWhereUniqueInput | null;
  dogSitter?: DogSitterWhereUniqueInput | null;
};
