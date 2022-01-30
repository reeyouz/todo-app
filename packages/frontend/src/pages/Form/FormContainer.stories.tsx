import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FormContainer as FormContainerComponent } from "./FormContainer";
import { Provider } from "react-redux";
import { store } from "../../store";
import { transformDate } from "../../utils";

export default {
  title: "Pages/FormContainer",
  component: FormContainerComponent,
} as ComponentMeta<typeof FormContainerComponent>;

const Template: ComponentStory<typeof FormContainerComponent> = (args) => (
  <Provider store={store}>
    <FormContainerComponent {...args} />
  </Provider>
);
export const FormContainer = Template.bind({});
FormContainer.args = {
  initialState: {
    title: "",
    description: "",
    dueDate: transformDate(new Date()),
    isComplete: false,
  },
};
