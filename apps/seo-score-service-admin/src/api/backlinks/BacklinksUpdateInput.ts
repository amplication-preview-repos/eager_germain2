import { UrlAnalysisWhereUniqueInput } from "../urlAnalysis/UrlAnalysisWhereUniqueInput";

export type BacklinksUpdateInput = {
  domains?: number | null;
  score?: number | null;
  total?: number | null;
  urlAnalysis?: UrlAnalysisWhereUniqueInput | null;
};
