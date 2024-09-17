import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UrlAnalysisTitle } from "../urlAnalysis/UrlAnalysisTitle";

export const BooleanCriteriaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
