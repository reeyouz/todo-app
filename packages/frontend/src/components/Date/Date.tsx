import React, { InputHTMLAttributes } from "react";

export type DateProps = InputHTMLAttributes<HTMLInputElement>;
export function Date(props: DateProps) {
  const { className, ...rest } = props;
  return <input {...rest} type="date" className="input" />;
}
