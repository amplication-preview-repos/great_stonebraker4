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

import { CLIENT_TITLE_FIELD } from "./ClientTitle";
import { DOG_TITLE_FIELD } from "../dog/DogTitle";
import { DOGSITTER_TITLE_FIELD } from "../dogSitter/DogSitterTitle";

export const ClientShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="email" source="email" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <ReferenceManyField
          reference="Booking"
          target="clientId"
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
        <ReferenceManyField
          reference="Review"
          target="clientId"
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
        <ReferenceManyField reference="Dog" target="clientId" label="Dogs">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="name" source="name" />
            <TextField label="breed" source="breed" />
            <TextField label="age" source="age" />
            <ReferenceField
              label="Client"
              source="client.id"
              reference="Client"
            >
              <TextField source={CLIENT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
