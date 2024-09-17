import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { URLANALYSIS_TITLE_FIELD } from "../urlAnalysis/UrlAnalysisTitle";

export const PageSpeedShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="accessibility" source="accessibility" />
        <TextField label="bestPractices" source="bestPractices" />
        <TextField label="cls" source="cls" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="fcp" source="fcp" />
        <TextField label="ID" source="id" />
        <TextField label="lcp" source="lcp" />
        <TextField label="performance" source="performance" />
        <TextField label="seo" source="seo" />
        <TextField label="strategy" source="strategy" />
        <TextField label="tbt" source="tbt" />
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
