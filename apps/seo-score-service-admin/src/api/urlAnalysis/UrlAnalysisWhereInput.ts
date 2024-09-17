import { BacklinksListRelationFilter } from "../backlinks/BacklinksListRelationFilter";
import { BooleanCriteriaListRelationFilter } from "../booleanCriteria/BooleanCriteriaListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ComparativeCriteriaListRelationFilter } from "../comparativeCriteria/ComparativeCriteriaListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { PageSpeedListRelationFilter } from "../pageSpeed/PageSpeedListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UrlAnalysisWhereInput = {
  backlinksItems?: BacklinksListRelationFilter;
  booleanCriteriaItems?: BooleanCriteriaListRelationFilter;
  booleanScore?: FloatNullableFilter;
  comparativeCriteriaItems?: ComparativeCriteriaListRelationFilter;
  comparativeScore?: FloatNullableFilter;
  contentSize?: IntNullableFilter;
  googlePosition?: IntNullableFilter;
  id?: StringFilter;
  isTarget?: BooleanNullableFilter;
  pageSpeeds?: PageSpeedListRelationFilter;
  seoScore?: FloatNullableFilter;
  url?: StringNullableFilter;
};
