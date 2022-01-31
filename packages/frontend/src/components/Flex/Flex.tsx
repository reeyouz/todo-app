import React, { HTMLAttributes, PropsWithChildren } from "react";

export type FlexProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  col: boolean;
};
export function Flex(props: FlexProps) {
  const { children, col = false, className, ...rest } = props;

  return (
    <div
      {...rest}
      className={`${className ? `flex ${className}` : "flex"} ${
        col ? "flex-col" : "flex-row"
      }`}
    >
      {children}
    </div>
  );
}

function Item(props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return <div {...props}></div>;
}

Flex.Item = Item;
