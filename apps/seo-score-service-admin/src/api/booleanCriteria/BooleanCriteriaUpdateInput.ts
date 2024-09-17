import { UrlAnalysisWhereUniqueInput } from "../urlAnalysis/UrlAnalysisWhereUniqueInput";

export type BooleanCriteriaUpdateInput = {
  keywordInTitle?: boolean | null;
  titleLength?: boolean | null;
  urlAnalysis?: UrlAnalysisWhereUniqueInput | null;
};
