import { SortOrder } from "../../util/SortOrder";

export type SeoTaskOrderByInput = {
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  keyword?: SortOrder;
  language?: SortOrder;
  location?: SortOrder;
  results?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
