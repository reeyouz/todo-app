import React from "react";
import { Input, Label, Radio, Textarea, Button } from "../../components";
import { Flex } from "../../components/Flex";
import { Date } from "../../components/Date";

export type FormProps = {};
export function Form(props: FormProps) {
  return (
    <form className="flex flex-col gap-2">
      <Flex col>
        <Label>Title</Label>
        <Input />
      </Flex>
      <Flex col>
        <Label>Description</Label>
        <Textarea />
      </Flex>
      <Flex col>
        <Label>Due Date</Label>
        <Date />
      </Flex>
      <Flex col={false} className="items-center gap-2">
        <Radio />
        <Label>Is Complete</Label>
      </Flex>
      <Button type="submit">Submit</Button>
    </form>
  );
}
