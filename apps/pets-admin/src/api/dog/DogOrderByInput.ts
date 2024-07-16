import { SortOrder } from "../../util/SortOrder";

export type DogOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  breed?: SortOrder;
  age?: SortOrder;
  clientId?: SortOrder;
};
