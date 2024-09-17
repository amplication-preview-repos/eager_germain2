import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UrlAnalysisWhereUniqueInput } from "../urlAnalysis/UrlAnalysisWhereUniqueInput";

export type BacklinksWhereInput = {
  domains?: IntNullableFilter;
  id?: StringFilter;
  score?: FloatNullableFilter;
  total?: IntNullableFilter;
  urlAnalysis?: UrlAnalysisWhereUniqueInput;
};
