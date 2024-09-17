import { SeoTask as TSeoTask } from "../api/seoTask/SeoTask";

export const SEOTASK_TITLE_FIELD = "country";

export const SeoTaskTitle = (record: TSeoTask): string => {
  return record.country?.toString() || String(record.id);
};
