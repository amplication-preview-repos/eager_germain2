import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UrlAnalysisWhereUniqueInput } from "../urlAnalysis/UrlAnalysisWhereUniqueInput";

export type ComparativeCriteriaWhereInput = {
  criterionName?: StringNullableFilter;
  id?: StringFilter;
  rank?: IntNullableFilter;
  score?: FloatNullableFilter;
  urlAnalysis?: UrlAnalysisWhereUniqueInput;
  value?: FloatNullableFilter;
};
