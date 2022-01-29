import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Date as DateComponent } from "./Date";

export default {
  title: "UI/Date",
  component: DateComponent,
} as ComponentMeta<typeof DateComponent>;

const Template: ComponentStory<typeof DateComponent> = (args) => (
  <DateComponent {...args} />
);
export const Date = Template.bind({});
Date.args = {};
