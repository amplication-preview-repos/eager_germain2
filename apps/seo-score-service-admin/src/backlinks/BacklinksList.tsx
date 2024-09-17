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

export const BacklinksList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"BacklinksItems"}
      perPage={50}
      pagination={<Pagination />}
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
