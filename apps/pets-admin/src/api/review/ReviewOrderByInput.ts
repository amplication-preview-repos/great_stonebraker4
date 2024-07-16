import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  rating?: SortOrder;
  comment?: SortOrder;
  clientId?: SortOrder;
  dogSitterId?: SortOrder;
};
