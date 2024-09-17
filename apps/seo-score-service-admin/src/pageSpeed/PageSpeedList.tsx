import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { URLANALYSIS_TITLE_FIELD } from "../urlAnalysis/UrlAnalysisTitle";

export const PageSpeedList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PageSpeeds"}
      perPage={50}
      pagination={<Pagination />}
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
