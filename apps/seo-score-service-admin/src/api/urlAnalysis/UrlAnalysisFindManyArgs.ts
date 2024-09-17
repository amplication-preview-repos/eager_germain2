import { UrlAnalysisWhereInput } from "./UrlAnalysisWhereInput";
import { UrlAnalysisOrderByInput } from "./UrlAnalysisOrderByInput";

export type UrlAnalysisFindManyArgs = {
  where?: UrlAnalysisWhereInput;
  orderBy?: Array<UrlAnalysisOrderByInput>;
  skip?: number;
  take?: number;
};
