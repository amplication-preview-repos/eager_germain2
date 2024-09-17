import { UrlAnalysisWhereUniqueInput } from "../urlAnalysis/UrlAnalysisWhereUniqueInput";

export type ComparativeCriteriaCreateInput = {
  criterionName?: string | null;
  rank?: number | null;
  score?: number | null;
  urlAnalysis?: UrlAnalysisWhereUniqueInput | null;
  value?: number | null;
};
