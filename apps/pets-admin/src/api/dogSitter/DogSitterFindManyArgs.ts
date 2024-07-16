import { DogSitterWhereInput } from "./DogSitterWhereInput";
import { DogSitterOrderByInput } from "./DogSitterOrderByInput";

export type DogSitterFindManyArgs = {
  where?: DogSitterWhereInput;
  orderBy?: Array<DogSitterOrderByInput>;
  skip?: number;
  take?: number;
};
