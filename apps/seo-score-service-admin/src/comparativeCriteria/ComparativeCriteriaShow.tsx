import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { URLANALYSIS_TITLE_FIELD } from "../urlAnalysis/UrlAnalysisTitle";

export const ComparativeCriteriaShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="criterionName" source="criterionName" />
        <TextField label="ID" source="id" />
        <TextField label="rank" source="rank" />
        <TextField label="score" source="score" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="urlAnalysis"
          source="urlanalysis.id"
          reference="UrlAnalysis"
        >
          <TextField source={URLANALYSIS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="value" source="value" />
      </SimpleShowLayout>
    </Show>
  );
};
