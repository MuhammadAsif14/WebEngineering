import React from "react";

export default function Triangle(props) {
  return (
    <div
      style={{
        width: `${props.size || 0}px`,
        height: `${props.size || 0}px`,
        borderLeft: `${props.size||100}px`,
        borderRight: `${props.size||100}px`,
        borderBottom: `${props.size||200}px`,
        backgroundColor: `${props.color || "red"}`,
      }}
    ></div>
  );
}
