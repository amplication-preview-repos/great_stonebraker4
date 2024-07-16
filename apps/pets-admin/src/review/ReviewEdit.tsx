import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ClientTitle } from "../client/ClientTitle";
import { DogSitterTitle } from "../dogSitter/DogSitterTitle";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="rating" source="rating" />
        <TextInput label="comment" multiline source="comment" />
        <ReferenceInput source="client.id" reference="Client" label="Client">
          <SelectInput optionText={ClientTitle} />
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
