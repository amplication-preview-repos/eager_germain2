import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const SeoTaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="country" source="country" />
        <TextInput label="keyword" source="keyword" />
        <TextInput label="language" source="language" />
        <TextInput label="location" source="location" />
        <NumberInput step={1} label="results" source="results" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
