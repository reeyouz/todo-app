import React, { InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;
export function Input(props: InputProps) {
  const { className, ...rest } = props;
  return <input {...rest} type="text" className="input" />;
}
