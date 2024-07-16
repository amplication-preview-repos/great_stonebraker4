import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";
import { DOGSITTER_TITLE_FIELD } from "./DogSitterTitle";
import { DOG_TITLE_FIELD } from "../dog/DogTitle";

export const DogSitterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="email" source="email" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="rating" source="rating" />
        <ReferenceManyField
          reference="Review"
          target="dogSitterId"
          label="Reviews"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="rating" source="rating" />
            <TextField label="comment" source="comment" />
            <ReferenceField
              label="Client"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="DogSitter"
              source="dogsitter.id"
              reference="DogSitter"
            >
              <TextField source={DOGSITTER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Booking"
          target="dogSitterId"
          label="Bookings"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="startTime" source="startTime" />
            <TextField label="endTime" source="endTime" />
            <ReferenceField
              label="Client"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Dog" source="dog.id" reference="Dog">
              <TextField source={DOG_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="DogSitter"
              source="dogsitter.id"
              reference="DogSitter"
            >
              <TextField source={DOGSITTER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
