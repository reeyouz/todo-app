import React, { ChangeEventHandler, FormEventHandler } from "react";
import { Input, Label, Radio, Textarea, Button } from "../../components";
import { Flex } from "../../components/Flex";
import { Date } from "../../components/Date";
import { Todo } from "../../types/Todo";

export interface FormProps {
  values: Todo;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
}
export function Form(props: FormProps) {
  const { values, onChange, onSubmit } = props;

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2">
      <Flex col>
        <Label>Title</Label>
        <Input name="title" value={values.title} onChange={onChange} />
      </Flex>
      <Flex col>
        <Label>Description</Label>
        <Textarea
          name="description"
          value={values.description}
          onChange={onChange}
        />
      </Flex>
      <Flex col>
        <Label>Due Date</Label>
        <Date name="dueDate" value={values.dueDate} onChange={onChange} />
      </Flex>
      <Flex col={false} className="items-center gap-2">
        <Radio
          name="isComplete"
          value={`${values.isComplete}`}
          checked={!!values.isComplete}
          onChange={onChange}
        />
        <Label>Is Complete</Label>
      </Flex>
      <Button type="submit">Submit</Button>
    </form>
  );
}
