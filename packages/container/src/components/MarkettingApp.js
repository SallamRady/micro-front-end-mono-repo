import React from "react";
import { useEffect, useRef } from "react";
import { mount } from "marketting/MarkettingApp";

export default function MarkettingApp() {
  const marketRef = useRef(null);
  console.log('mount',marketRef)

  useEffect(() => {
    mount(marketRef.current);
  });

  return <div ref={marketRef} />;
}
