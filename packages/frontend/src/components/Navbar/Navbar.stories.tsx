import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Navbar as HeaderComponent } from "./Navbar";
import { Button } from "../Button";

export default {
  title: "UI/Navbar",
  component: HeaderComponent,
} as ComponentMeta<typeof HeaderComponent>;

const Template: ComponentStory<typeof HeaderComponent> = (args) => (
  <HeaderComponent {...args} />
);

export const Navbar = Template.bind({});
Navbar.args = {
  children: (
    <>
      <div className="flex sm:hidden items-center">
        <span className="material-icons">menu</span>
      </div>
      <div className="hidden sm:flex items-center">
        <Button>Dashboard</Button>
        <Button>Home</Button>
        <Button>About</Button>
        <Button>Profile</Button>
      </div>
    </>
  ),
};
