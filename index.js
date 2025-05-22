import React from "react";

export default function HelloShared({ name }) {
  return <div style={{ border: "1px solid #aaa", padding: 16 }}>Hello from Shared! {name}</div>;
}
