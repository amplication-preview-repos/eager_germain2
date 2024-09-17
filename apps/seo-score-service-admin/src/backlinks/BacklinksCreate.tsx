import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UrlAnalysisTitle } from "../urlAnalysis/UrlAnalysisTitle";

export const BacklinksCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="domains" source="domains" />
        <NumberInput label="score" source="score" />
        <NumberInput step={1} label="total" source="total" />
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
