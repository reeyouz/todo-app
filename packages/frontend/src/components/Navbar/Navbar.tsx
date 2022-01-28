import React, { PropsWithChildren, HTMLAttributes } from "react";

export type HeaderProps = PropsWithChildren<HTMLAttributes<HTMLHeadElement>>;
export function Navbar(props: HeaderProps) {
  const { children, ...rest } = props;
  return (
    <nav {...rest} className="nav">
      {children}
    </nav>
  );
}
