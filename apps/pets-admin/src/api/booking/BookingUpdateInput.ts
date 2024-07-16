import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DogWhereUniqueInput } from "../dog/DogWhereUniqueInput";
import { DogSitterWhereUniqueInput } from "../dogSitter/DogSitterWhereUniqueInput";

export type BookingUpdateInput = {
  startTime?: Date | null;
  endTime?: Date | null;
  client?: ClientWhereUniqueInput | null;
  dog?: DogWhereUniqueInput | null;
  dogSitter?: DogSitterWhereUniqueInput | null;
};
