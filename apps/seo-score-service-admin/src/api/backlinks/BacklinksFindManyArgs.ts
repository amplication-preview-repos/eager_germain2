import { BacklinksWhereInput } from "./BacklinksWhereInput";
import { BacklinksOrderByInput } from "./BacklinksOrderByInput";

export type BacklinksFindManyArgs = {
  where?: BacklinksWhereInput;
  orderBy?: Array<BacklinksOrderByInput>;
  skip?: number;
  take?: number;
};
