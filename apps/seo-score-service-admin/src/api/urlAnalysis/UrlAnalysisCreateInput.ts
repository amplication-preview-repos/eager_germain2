import { BacklinksCreateNestedManyWithoutUrlAnalysesInput } from "./BacklinksCreateNestedManyWithoutUrlAnalysesInput";
import { BooleanCriteriaCreateNestedManyWithoutUrlAnalysesInput } from "./BooleanCriteriaCreateNestedManyWithoutUrlAnalysesInput";
import { ComparativeCriteriaCreateNestedManyWithoutUrlAnalysesInput } from "./ComparativeCriteriaCreateNestedManyWithoutUrlAnalysesInput";
import { PageSpeedCreateNestedManyWithoutUrlAnalysesInput } from "./PageSpeedCreateNestedManyWithoutUrlAnalysesInput";

export type UrlAnalysisCreateInput = {
  backlinksItems?: BacklinksCreateNestedManyWithoutUrlAnalysesInput;
  booleanCriteriaItems?: BooleanCriteriaCreateNestedManyWithoutUrlAnalysesInput;
  booleanScore?: number | null;
  comparativeCriteriaItems?: ComparativeCriteriaCreateNestedManyWithoutUrlAnalysesInput;
  comparativeScore?: number | null;
  contentSize?: number | null;
  googlePosition?: number | null;
  isTarget?: boolean | null;
  pageSpeeds?: PageSpeedCreateNestedManyWithoutUrlAnalysesInput;
  seoScore?: number | null;
  url?: string | null;
};
