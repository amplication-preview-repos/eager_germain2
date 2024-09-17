import { PageSpeed as TPageSpeed } from "../api/pageSpeed/PageSpeed";

export const PAGESPEED_TITLE_FIELD = "strategy";

export const PageSpeedTitle = (record: TPageSpeed): string => {
  return record.strategy?.toString() || String(record.id);
};
