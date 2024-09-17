import { UrlAnalysis as TUrlAnalysis } from "../api/urlAnalysis/UrlAnalysis";

export const URLANALYSIS_TITLE_FIELD = "url";

export const UrlAnalysisTitle = (record: TUrlAnalysis): string => {
  return record.url?.toString() || String(record.id);
};
