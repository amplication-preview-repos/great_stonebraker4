import { DogWhereUniqueInput } from "./DogWhereUniqueInput";
import { DogUpdateInput } from "./DogUpdateInput";

export type UpdateDogArgs = {
  where: DogWhereUniqueInput;
  data: DogUpdateInput;
};
