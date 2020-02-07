import React from "react";

export default function Button(props) {
  //   onClick = () => {};

  return <button onClick={() => props.onClick()}>Click me!</button>;
}
