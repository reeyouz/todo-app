import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Label as LabelComponent } from "./Label";

export default {
  title: "UI/Label",
  component: LabelComponent,
} as ComponentMeta<typeof LabelComponent>;

const Template: ComponentStory<typeof LabelComponent> = (args) => (
  <LabelComponent {...args} />
);
export const Label = Template.bind({});
Label.args = {
  children: "Title",
};
