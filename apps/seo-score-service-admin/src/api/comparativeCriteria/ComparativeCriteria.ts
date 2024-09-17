import { UrlAnalysis } from "../urlAnalysis/UrlAnalysis";

export type ComparativeCriteria = {
  createdAt: Date;
  criterionName: string | null;
  id: string;
  rank: number | null;
  score: number | null;
  updatedAt: Date;
  urlAnalysis?: UrlAnalysis | null;
  value: number | null;
};
