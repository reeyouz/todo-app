import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Form as FormComponent } from "./Form";

export default {
  title: "Pages/Form",
  component: FormComponent,
} as ComponentMeta<typeof FormComponent>;

const Template: ComponentStory<typeof FormComponent> = (args) => (
  <FormComponent {...args} />
);
export const Form = Template.bind({});
Form.args = {};
