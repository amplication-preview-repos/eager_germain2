import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { URLANALYSIS_TITLE_FIELD } from "../urlAnalysis/UrlAnalysisTitle";

export const ComparativeCriteriaList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ComparativeCriteriaItems"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="value" source="value" />{" "}
      </Datagrid>
    </List>
  );
};
