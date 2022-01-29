import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input as InputComponent } from "./Input";
import { Label } from "..";
import { Flex } from "../Flex";

export default {
  title: "UI/Input",
  component: InputComponent,
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => (
  <InputComponent {...args} />
);
export const Input = Template.bind({});
Input.args = {
  type: "text",
};

export const InputWithLabel = () => {
  return (
    <Flex col className="items-stretch">
      <Label>Title</Label>
      <InputComponent placeholder="Enter title" />
    </Flex>
  );
};
