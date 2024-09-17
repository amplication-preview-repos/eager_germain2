import { UrlAnalysisWhereUniqueInput } from "../urlAnalysis/UrlAnalysisWhereUniqueInput";

export type BooleanCriteriaCreateInput = {
  keywordInTitle?: boolean | null;
  titleLength?: boolean | null;
  urlAnalysis?: UrlAnalysisWhereUniqueInput | null;
};
