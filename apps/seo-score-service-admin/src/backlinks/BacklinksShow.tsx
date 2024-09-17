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

export const BacklinksShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="domains" source="domains" />
        <TextField label="ID" source="id" />
        <TextField label="score" source="score" />
        <TextField label="total" source="total" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="urlAnalysis"
          source="urlanalysis.id"
          reference="UrlAnalysis"
        >
          <TextField source={URLANALYSIS_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
