import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type SeoTaskWhereInput = {
  country?: StringNullableFilter;
  id?: StringFilter;
  keyword?: StringNullableFilter;
  language?: StringNullableFilter;
  location?: StringNullableFilter;
  results?: IntNullableFilter;
  url?: StringNullableFilter;
};
