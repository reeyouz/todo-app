import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button as ButtonComponent } from "./Button";

export default {
  title: "UI/Button",
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const Button = Template.bind({});
Button.args = {
  children: "Click Me",
};
