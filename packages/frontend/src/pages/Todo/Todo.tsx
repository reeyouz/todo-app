import React from "react";
import { Flex, Radio } from "../../components";
import { Todo as TodoType } from "../../types";

export interface TodoProps {
  todo: TodoType;
}
export function Todo(props: TodoProps) {
  const { todo } = props;
  return (
    <Flex col={false} className="todo items-center gap-3 justify-between">
      <Flex.Item>
        <Radio checked={todo.isComplete} />
      </Flex.Item>
      <Flex.Item className="flex-grow">
        <span>{todo.title}</span>
      </Flex.Item>
      <Flex.Item>
        <span>{todo.dueDate}</span>
      </Flex.Item>
    </Flex>
  );
}
