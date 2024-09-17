import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { URLANALYSIS_TITLE_FIELD } from "./UrlAnalysisTitle";

export const UrlAnalysisShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="booleanScore" source="booleanScore" />
        <TextField label="comparativeScore" source="comparativeScore" />
        <TextField label="contentSize" source="contentSize" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="googlePosition" source="googlePosition" />
        <TextField label="ID" source="id" />
        <BooleanField label="isTarget" source="isTarget" />
        <TextField label="seoScore" source="seoScore" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />
        <ReferenceManyField
          reference="Backlinks"
          target="urlAnalysisId"
          label="BacklinksItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="domains" source="domains" />
            <TextField label="ID" source="id" />
            <TextField label="score" source="score" />
            <TextField label="total" source="total" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="urlAnalysis"
              source="urlanalysis.id"
              reference="UrlAnalysis"
            >
              <TextField source={URLANALYSIS_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="BooleanCriteria"
          target="urlAnalysisId"
          label="BooleanCriteriaItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="keywordInTitle" source="keywordInTitle" />
            <BooleanField label="titleLength" source="titleLength" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="urlAnalysis"
              source="urlanalysis.id"
              reference="UrlAnalysis"
            >
              <TextField source={URLANALYSIS_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ComparativeCriteria"
          target="urlAnalysisId"
          label="ComparativeCriteriaItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="criterionName" source="criterionName" />
            <TextField label="ID" source="id" />
            <TextField label="rank" source="rank" />
            <TextField label="score" source="score" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="urlAnalysis"
              source="urlanalysis.id"
              reference="UrlAnalysis"
            >
              <TextField source={URLANALYSIS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="value" source="value" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PageSpeed"
          target="urlAnalysisId"
          label="PageSpeeds"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
