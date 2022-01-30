import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Form as FormComponent } from "./Form";
import { transformDate } from "../../utils";

export default {
  title: "Pages/Form",
  component: FormComponent,
} as ComponentMeta<typeof FormComponent>;

const Template: ComponentStory<typeof FormComponent> = (args) => (
  <FormComponent {...args} />
);
export const Form = Template.bind({});
Form.args = {
  values: {
    title: "Grocery",
    description: "apples, oranges, potato and banana",
    dueDate: transformDate(new Date()),
    isComplete: true,
  },
};
