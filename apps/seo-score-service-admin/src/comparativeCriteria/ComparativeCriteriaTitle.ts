import { ComparativeCriteria as TComparativeCriteria } from "../api/comparativeCriteria/ComparativeCriteria";

export const COMPARATIVECRITERIA_TITLE_FIELD = "criterionName";

export const ComparativeCriteriaTitle = (
  record: TComparativeCriteria
): string => {
  return record.criterionName?.toString() || String(record.id);
};
