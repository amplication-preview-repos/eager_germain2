import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const SeoTaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="country" source="country" />
        <TextInput label="keyword" source="keyword" />
        <TextInput label="language" source="language" />
        <TextInput label="location" source="location" />
        <NumberInput step={1} label="results" source="results" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
