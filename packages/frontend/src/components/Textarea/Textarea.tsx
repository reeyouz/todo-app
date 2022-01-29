import React, { TextareaHTMLAttributes } from "react";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;
export function Textarea(props: TextareaProps) {
  const { className, ...rest } = props;
  return <textarea {...rest} className="input" />;
}
