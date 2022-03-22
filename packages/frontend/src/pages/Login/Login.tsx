import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Button, Input, Label } from "../../components";
import { Flex } from "../../components/Flex";
import { useLoginMutation } from "../../store/auth";
import { Credentials } from "../../types";

export interface LoginProps {
  initial: Credentials;
}
export function Login(props: LoginProps) {
  const { initial } = props;
  const [formData, setFormData] = useState(initial);
  const [loginUser] = useLoginMutation();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await loginUser(formData);
    console.log(res);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <Flex col>
        <Label htmlFor="email">Email</Label>
        <Input
          name="email"
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Flex>
      <Flex col>
        <Label htmlFor="password">Password</Label>
        <Input
          name="password"
          id="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
      </Flex>
      <Button type="submit">Login</Button>
    </form>
  );
}
