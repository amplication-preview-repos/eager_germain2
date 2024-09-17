import { BooleanCriteriaWhereInput } from "./BooleanCriteriaWhereInput";
import { BooleanCriteriaOrderByInput } from "./BooleanCriteriaOrderByInput";

export type BooleanCriteriaFindManyArgs = {
  where?: BooleanCriteriaWhereInput;
  orderBy?: Array<BooleanCriteriaOrderByInput>;
  skip?: number;
  take?: number;
};
