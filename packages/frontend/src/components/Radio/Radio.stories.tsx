import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Radio as RadioComponent } from "./Radio";
import { Label } from "..";
import { Flex } from "../Flex";

export default {
  title: "UI/Radio",
  component: RadioComponent,
} as ComponentMeta<typeof RadioComponent>;

const Template: ComponentStory<typeof RadioComponent> = (args) => (
  <RadioComponent {...args} />
);
export const Radio = Template.bind({});
Radio.args = {};

export const RadioWithLabel = () => {
  return (
    <Flex col={false} className="items-center gap-1">
      <RadioComponent />
      <Label>Task Complete</Label>
    </Flex>
  );
};
