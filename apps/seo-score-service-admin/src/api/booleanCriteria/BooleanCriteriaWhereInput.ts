import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UrlAnalysisWhereUniqueInput } from "../urlAnalysis/UrlAnalysisWhereUniqueInput";

export type BooleanCriteriaWhereInput = {
  id?: StringFilter;
  keywordInTitle?: BooleanNullableFilter;
  titleLength?: BooleanNullableFilter;
  urlAnalysis?: UrlAnalysisWhereUniqueInput;
};
