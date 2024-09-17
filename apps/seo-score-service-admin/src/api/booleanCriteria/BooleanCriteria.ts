import { UrlAnalysis } from "../urlAnalysis/UrlAnalysis";

export type BooleanCriteria = {
  createdAt: Date;
  id: string;
  keywordInTitle: boolean | null;
  titleLength: boolean | null;
  updatedAt: Date;
  urlAnalysis?: UrlAnalysis | null;
};
