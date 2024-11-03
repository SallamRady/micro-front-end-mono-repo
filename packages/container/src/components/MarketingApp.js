import React from "react";
import { useEffect, useRef } from "react";
import { mount } from "marketing/MarketingApp";

export default function MarketingApp() {
  const marketRef = useRef(null);
  console.log('mount',marketRef)

  useEffect(() => {
    mount(marketRef.current);
  });

  return <div ref={marketRef} />;
}
