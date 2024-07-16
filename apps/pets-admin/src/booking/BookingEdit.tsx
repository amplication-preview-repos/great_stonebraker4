import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ClientTitle } from "../client/ClientTitle";
import { DogTitle } from "../dog/DogTitle";
import { DogSitterTitle } from "../dogSitter/DogSitterTitle";

export const BookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="startTime" source="startTime" />
        <DateTimeInput label="endTime" source="endTime" />
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <ReferenceInput source="dog.id" reference="Dog" label="Dog">
          <SelectInput optionText={DogTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="dogSitter.id"
          reference="DogSitter"
          label="DogSitter"
        >
          <SelectInput optionText={DogSitterTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};