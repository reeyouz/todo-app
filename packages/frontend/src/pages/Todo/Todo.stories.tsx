import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Todo as TodoComponent } from "./Todo";
import { transformDate } from "../../utils";

export default {
  title: "Pages/Todo",
  component: TodoComponent,
} as ComponentMeta<typeof TodoComponent>;

const Template: ComponentStory<typeof TodoComponent> = (args) => (
  <TodoComponent {...args} />
);

export const Todo = Template.bind({});
Todo.args = {
  todo: {
    title: "Grocery shopping",
    description: "apples, oranges and potatoes",
    dueDate: transformDate(new Date()),
    isComplete: false,
  },
};
