import { UrlAnalysis } from "../urlAnalysis/UrlAnalysis";

export type Backlinks = {
  createdAt: Date;
  domains: number | null;
  id: string;
  score: number | null;
  total: number | null;
  updatedAt: Date;
  urlAnalysis?: UrlAnalysis | null;
};
