import { SeoTaskWhereInput } from "./SeoTaskWhereInput";
import { SeoTaskOrderByInput } from "./SeoTaskOrderByInput";

export type SeoTaskFindManyArgs = {
  where?: SeoTaskWhereInput;
  orderBy?: Array<SeoTaskOrderByInput>;
  skip?: number;
  take?: number;
};
