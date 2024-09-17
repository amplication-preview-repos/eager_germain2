import { UrlAnalysisWhereUniqueInput } from "../urlAnalysis/UrlAnalysisWhereUniqueInput";

export type PageSpeedUpdateInput = {
  accessibility?: number | null;
  bestPractices?: number | null;
  cls?: number | null;
  fcp?: number | null;
  lcp?: number | null;
  performance?: number | null;
  seo?: number | null;
  strategy?: string | null;
  tbt?: number | null;
  urlAnalysis?: UrlAnalysisWhereUniqueInput | null;
};
