import React from "react";

function P(props: { color: string; size: string; children: React.ReactNode; lineHeight: string; fontWeight: string; fontFamily: string; }) {
  const { color, size, children, lineHeight, fontWeight, fontFamily, ...rest } = props;
  return (
    <p style={{ color, fontSize: size, lineHeight, fontWeight, fontFamily }} {...rest}>
      {children}
    </p>
  );
}

export default function PropCombination() {
  const paragraphProps = {
    color: "red",
    size: "20px",
    lineHeight: "22px",
    fontWeight: "bold",
    fontFamily: "Arial",
  };
  return <P {...paragraphProps}>This is a P</P>;
}