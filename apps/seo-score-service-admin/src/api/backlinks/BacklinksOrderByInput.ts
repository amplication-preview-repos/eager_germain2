import { SortOrder } from "../../util/SortOrder";

export type BacklinksOrderByInput = {
  createdAt?: SortOrder;
  domains?: SortOrder;
  id?: SortOrder;
  score?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
  urlAnalysisId?: SortOrder;
};
