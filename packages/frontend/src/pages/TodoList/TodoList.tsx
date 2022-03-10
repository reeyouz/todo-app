import React from "react";
import { Todo } from "..";
import { Flex } from "../../components";
import { useGetTodosQuery } from "../../store";

export function TodoList() {
  const { data: todos = [] } = useGetTodosQuery();

  return (
    <Flex col={true} className="gap-4">
      {todos.map((todo, index) => (
        <Flex.Item key={index}>
          <Todo todo={todo} />
        </Flex.Item>
      ))}
    </Flex>
  );
}
