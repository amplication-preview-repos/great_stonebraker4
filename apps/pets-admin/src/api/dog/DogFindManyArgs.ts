import { DogWhereInput } from "./DogWhereInput";
import { DogOrderByInput } from "./DogOrderByInput";

export type DogFindManyArgs = {
  where?: DogWhereInput;
  orderBy?: Array<DogOrderByInput>;
  skip?: number;
  take?: number;
};
