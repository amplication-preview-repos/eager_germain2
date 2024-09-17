import { SortOrder } from "../../util/SortOrder";

export type UrlAnalysisOrderByInput = {
  booleanScore?: SortOrder;
  comparativeScore?: SortOrder;
  contentSize?: SortOrder;
  createdAt?: SortOrder;
  googlePosition?: SortOrder;
  id?: SortOrder;
  isTarget?: SortOrder;
  seoScore?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
