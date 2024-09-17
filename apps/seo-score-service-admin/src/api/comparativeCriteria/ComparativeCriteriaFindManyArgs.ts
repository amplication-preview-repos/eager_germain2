import { ComparativeCriteriaWhereInput } from "./ComparativeCriteriaWhereInput";
import { ComparativeCriteriaOrderByInput } from "./ComparativeCriteriaOrderByInput";

export type ComparativeCriteriaFindManyArgs = {
  where?: ComparativeCriteriaWhereInput;
  orderBy?: Array<ComparativeCriteriaOrderByInput>;
  skip?: number;
  take?: number;
};
