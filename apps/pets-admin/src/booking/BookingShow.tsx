import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";
import { DOG_TITLE_FIELD } from "../dog/DogTitle";
import { DOGSITTER_TITLE_FIELD } from "../dogSitter/DogSitterTitle";

export const BookingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="startTime" source="startTime" />
        <TextField label="endTime" source="endTime" />
        <ReferenceField label="Client" source="client.id" reference="Client">
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
      </SimpleShowLayout>
    </Show>
  );
};
