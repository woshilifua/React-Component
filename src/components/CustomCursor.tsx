import React from "react";

interface Props {
  url: string;
  children: React.ReactElement;
}

export default function CustomeCursor({ url, children }: Props) {
  const childrenStyle = { cursor: `url(${url}), auto` };

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { style: childrenStyle });
      })}
    </>
  );
}
