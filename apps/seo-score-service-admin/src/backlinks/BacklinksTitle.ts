import { Backlinks as TBacklinks } from "../api/backlinks/Backlinks";

export const BACKLINKS_TITLE_FIELD = "id";

export const BacklinksTitle = (record: TBacklinks): string => {
  return record.id?.toString() || String(record.id);
};
