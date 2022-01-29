import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Textarea as TextareaComponent } from "./Textarea";
import { Label } from "..";
import { Flex } from "../Flex";

export default {
  title: "UI/Textarea",
  component: TextareaComponent,
} as ComponentMeta<typeof TextareaComponent>;

const Template: ComponentStory<typeof TextareaComponent> = (args) => (
  <TextareaComponent {...args} />
);
export const Textarea = Template.bind({});
Textarea.args = {};

export const TextareaWithLabel = () => {
  return (
    <Flex col className="items-stretch">
      <Label>Description</Label>
      <TextareaComponent placeholder="Enter description" />
    </Flex>
  );
};
