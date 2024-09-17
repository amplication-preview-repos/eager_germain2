import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SeoTaskList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SeoTasks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="keyword" source="keyword" />
        <TextField label="language" source="language" />
        <TextField label="location" source="location" />
        <TextField label="results" source="results" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />{" "}
      </Datagrid>
    </List>
  );
};
