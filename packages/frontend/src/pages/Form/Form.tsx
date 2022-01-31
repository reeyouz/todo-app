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
        <Label htmlFor="title">Title</Label>
        <Input
          name="title"
          id="title"
          value={values.title}
          onChange={onChange}
        />
      </Flex>
      <Flex col>
        <Label htmlFor="description">Description</Label>
        <Textarea
          name="description"
          id="description"
          value={values.description}
          onChange={onChange}
        />
      </Flex>
      <Flex col>
        <Label htmlFor="dueDate">Due Date</Label>
        <Date
          role="textbox"
          name="dueDate"
          id="dueDate"
          value={values.dueDate}
          onChange={onChange}
        />
      </Flex>
      <Flex col={false} className="items-center gap-2">
        <Radio
          name="isComplete"
          id="isComplete"
          value={`${values.isComplete}`}
          checked={!!values.isComplete}
          onChange={onChange}
        />
        <Label htmlFor="isComplete">Is Complete</Label>
      </Flex>
      <Button type="submit">Submit</Button>
    </form>
  );
}
