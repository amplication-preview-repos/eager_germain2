import { UrlAnalysis } from "../urlAnalysis/UrlAnalysis";

export type PageSpeed = {
  accessibility: number | null;
  bestPractices: number | null;
  cls: number | null;
  createdAt: Date;
  fcp: number | null;
  id: string;
  lcp: number | null;
  performance: number | null;
  seo: number | null;
  strategy: string | null;
  tbt: number | null;
  updatedAt: Date;
  urlAnalysis?: UrlAnalysis | null;
};
