import { Backlinks } from "../backlinks/Backlinks";
import { BooleanCriteria } from "../booleanCriteria/BooleanCriteria";
import { ComparativeCriteria } from "../comparativeCriteria/ComparativeCriteria";
import { PageSpeed } from "../pageSpeed/PageSpeed";

export type UrlAnalysis = {
  backlinksItems?: Array<Backlinks>;
  booleanCriteriaItems?: Array<BooleanCriteria>;
  booleanScore: number | null;
  comparativeCriteriaItems?: Array<ComparativeCriteria>;
  comparativeScore: number | null;
  contentSize: number | null;
  createdAt: Date;
  googlePosition: number | null;
  id: string;
  isTarget: boolean | null;
  pageSpeeds?: Array<PageSpeed>;
  seoScore: number | null;
  updatedAt: Date;
  url: string | null;
};
