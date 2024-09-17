import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UrlAnalysisTitle } from "../urlAnalysis/UrlAnalysisTitle";

export const PageSpeedEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="accessibility" source="accessibility" />
        <NumberInput label="bestPractices" source="bestPractices" />
        <NumberInput label="cls" source="cls" />
        <NumberInput label="fcp" source="fcp" />
        <NumberInput label="lcp" source="lcp" />
        <NumberInput label="performance" source="performance" />
        <NumberInput label="seo" source="seo" />
        <TextInput label="strategy" source="strategy" />
        <NumberInput label="tbt" source="tbt" />
        <ReferenceInput
          source="urlAnalysis.id"
          reference="UrlAnalysis"
          label="urlAnalysis"
        >
          <SelectInput optionText={UrlAnalysisTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
