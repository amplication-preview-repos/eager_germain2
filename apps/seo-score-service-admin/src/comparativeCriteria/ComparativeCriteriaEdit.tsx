import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UrlAnalysisTitle } from "../urlAnalysis/UrlAnalysisTitle";

export const ComparativeCriteriaEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="criterionName" source="criterionName" />
        <NumberInput step={1} label="rank" source="rank" />
        <NumberInput label="score" source="score" />
        <ReferenceInput
          source="urlAnalysis.id"
          reference="UrlAnalysis"
          label="urlAnalysis"
        >
          <SelectInput optionText={UrlAnalysisTitle} />
        </ReferenceInput>
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
