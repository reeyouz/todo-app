import React, { LabelHTMLAttributes } from "react";

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>
export function Label(props: LabelProps) {
  const {...rest} = props;
  return (
    <label {...rest} className="label" />
  )
}