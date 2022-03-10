import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TodoList as TodoListComponent } from "./TodoList";
import { sampleTodos } from "../../test";
import { Provider } from "react-redux";
import { store } from "../../store";

export default {
  title: "Pages/TodoList",
  component: TodoListComponent,
} as ComponentMeta<typeof TodoListComponent>;

const Template: ComponentStory<typeof TodoListComponent> = () => (
  <Provider store={store}>
    <TodoListComponent />
  </Provider>
);

export const TodoList = Template.bind({});
