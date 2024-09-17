import { BacklinksUpdateManyWithoutUrlAnalysesInput } from "./BacklinksUpdateManyWithoutUrlAnalysesInput";
import { BooleanCriteriaUpdateManyWithoutUrlAnalysesInput } from "./BooleanCriteriaUpdateManyWithoutUrlAnalysesInput";
import { ComparativeCriteriaUpdateManyWithoutUrlAnalysesInput } from "./ComparativeCriteriaUpdateManyWithoutUrlAnalysesInput";
import { PageSpeedUpdateManyWithoutUrlAnalysesInput } from "./PageSpeedUpdateManyWithoutUrlAnalysesInput";

export type UrlAnalysisUpdateInput = {
  backlinksItems?: BacklinksUpdateManyWithoutUrlAnalysesInput;
  booleanCriteriaItems?: BooleanCriteriaUpdateManyWithoutUrlAnalysesInput;
  booleanScore?: number | null;
  comparativeCriteriaItems?: ComparativeCriteriaUpdateManyWithoutUrlAnalysesInput;
  comparativeScore?: number | null;
  contentSize?: number | null;
  googlePosition?: number | null;
  isTarget?: boolean | null;
  pageSpeeds?: PageSpeedUpdateManyWithoutUrlAnalysesInput;
  seoScore?: number | null;
  url?: string | null;
};
