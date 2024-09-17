import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const UrlAnalysisList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"UrlAnalyses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="booleanScore" source="booleanScore" />
        <TextField label="comparativeScore" source="comparativeScore" />
        <TextField label="contentSize" source="contentSize" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="googlePosition" source="googlePosition" />
        <TextField label="ID" source="id" />
        <BooleanField label="isTarget" source="isTarget" />
        <TextField label="seoScore" source="seoScore" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />{" "}
      </Datagrid>
    </List>
  );
};
