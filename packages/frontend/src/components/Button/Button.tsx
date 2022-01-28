import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>;
export function Button(props: ButtonProps) {
  const { className, children, ...rest } = props;
  return (
    <button {...rest} className="btn">
      {children}
    </button>
  );
}
