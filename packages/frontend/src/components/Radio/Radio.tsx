import React, { InputHTMLAttributes } from "react";

export type RadioProps = InputHTMLAttributes<HTMLInputElement>;
export function Radio(props: RadioProps) {
  const { ...rest } = props;
  return <input {...rest} type="checkbox" className="checkbox" />;
}
