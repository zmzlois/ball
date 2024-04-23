"use client";
import { useEffect, useRef } from "react";
import { useMousePosition } from "./useMousePosition";
export const Light = () => {
  const light = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition(light);

  useEffect(() => {
    if (!light.current) console.log("light.current is null");
    light.current!.style.left == `${x}px`;
    light.current!.style.top == `${y}px`;
  }, []);
  return (
    <div
      ref={light}
      className="light w-8 absolute aspect-square rounded-full bg-white border border-black"
    />
  );
};
