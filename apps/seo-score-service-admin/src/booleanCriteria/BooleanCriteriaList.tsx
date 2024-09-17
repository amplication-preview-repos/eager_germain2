import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { URLANALYSIS_TITLE_FIELD } from "../urlAnalysis/UrlAnalysisTitle";

export const BooleanCriteriaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"BooleanCriteriaItems"}
      perPage={50}
      pagination={<Pagination />}
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
