import React, { InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;
export function Input(props: InputProps) {
  const { className, type = "text", ...rest } = props;
  return <input {...rest} type={type} className="input" />;
}
