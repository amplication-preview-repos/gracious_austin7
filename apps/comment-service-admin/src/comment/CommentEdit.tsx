import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="blogPost" source="blogPost" />
        <TextInput label="text" multiline source="text" />
      </SimpleForm>
    </Edit>
  );
};
