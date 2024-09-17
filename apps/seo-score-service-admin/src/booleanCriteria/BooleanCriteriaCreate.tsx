import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UrlAnalysisTitle } from "../urlAnalysis/UrlAnalysisTitle";

export const BooleanCriteriaCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="keywordInTitle" source="keywordInTitle" />
        <BooleanInput label="titleLength" source="titleLength" />
        <ReferenceInput
          source="urlAnalysis.id"
          reference="UrlAnalysis"
          label="urlAnalysis"
        >
          <SelectInput optionText={UrlAnalysisTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
