import { SortOrder } from "../../util/SortOrder";

export type DogSitterOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
  phoneNumber?: SortOrder;
  rating?: SortOrder;
};
