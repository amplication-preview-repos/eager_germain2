import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UrlAnalysisWhereUniqueInput } from "../urlAnalysis/UrlAnalysisWhereUniqueInput";

export type PageSpeedWhereInput = {
  accessibility?: FloatNullableFilter;
  bestPractices?: FloatNullableFilter;
  cls?: FloatNullableFilter;
  fcp?: FloatNullableFilter;
  id?: StringFilter;
  lcp?: FloatNullableFilter;
  performance?: FloatNullableFilter;
  seo?: FloatNullableFilter;
  strategy?: StringNullableFilter;
  tbt?: FloatNullableFilter;
  urlAnalysis?: UrlAnalysisWhereUniqueInput;
};
