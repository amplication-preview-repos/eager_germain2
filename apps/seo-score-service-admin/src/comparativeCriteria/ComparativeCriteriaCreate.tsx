import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UrlAnalysisTitle } from "../urlAnalysis/UrlAnalysisTitle";

export const ComparativeCriteriaCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
