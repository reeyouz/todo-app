import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Login as LoginComponent } from "./Login";
import { Provider } from "react-redux";
import { store } from "../../store";

export default {
  title: "Pages/Login",
  component: LoginComponent,
} as ComponentMeta<typeof LoginComponent>;

const Template: ComponentStory<typeof LoginComponent> = (args) => (
  <Provider store={store}>
    <LoginComponent {...args} />
  </Provider>
);

export const Login = Template.bind({});
Login.args = {
  initial: {
    email: "joerogan@ufc.com",
    password: "joerogan",
  },
};
