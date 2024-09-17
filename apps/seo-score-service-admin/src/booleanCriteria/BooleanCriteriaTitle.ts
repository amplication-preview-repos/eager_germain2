import { BooleanCriteria as TBooleanCriteria } from "../api/booleanCriteria/BooleanCriteria";

export const BOOLEANCRITERIA_TITLE_FIELD = "keywordInTitle";

export const BooleanCriteriaTitle = (record: TBooleanCriteria): string => {
  return record.keywordInTitle?.toString() || String(record.id);
};
