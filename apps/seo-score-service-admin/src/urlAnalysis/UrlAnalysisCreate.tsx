import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { BacklinksTitle } from "../backlinks/BacklinksTitle";
import { BooleanCriteriaTitle } from "../booleanCriteria/BooleanCriteriaTitle";
import { ComparativeCriteriaTitle } from "../comparativeCriteria/ComparativeCriteriaTitle";
import { PageSpeedTitle } from "../pageSpeed/PageSpeedTitle";

export const UrlAnalysisCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="backlinksItems" reference="Backlinks">
          <SelectArrayInput
            optionText={BacklinksTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="booleanCriteriaItems"
          reference="BooleanCriteria"
        >
          <SelectArrayInput
            optionText={BooleanCriteriaTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput label="booleanScore" source="booleanScore" />
        <ReferenceArrayInput
          source="comparativeCriteriaItems"
          reference="ComparativeCriteria"
        >
          <SelectArrayInput
            optionText={ComparativeCriteriaTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput label="comparativeScore" source="comparativeScore" />
        <NumberInput step={1} label="contentSize" source="contentSize" />
        <NumberInput step={1} label="googlePosition" source="googlePosition" />
        <BooleanInput label="isTarget" source="isTarget" />
        <ReferenceArrayInput source="pageSpeeds" reference="PageSpeed">
          <SelectArrayInput
            optionText={PageSpeedTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput label="seoScore" source="seoScore" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
