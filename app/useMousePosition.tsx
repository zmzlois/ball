import React, { Ref, RefObject } from "react";
export const useMousePosition = (ref: RefObject<HTMLDivElement>) => {
  const [position, setPosition] = React.useState({
    x: 0,
    y: 0,
  });
  React.useEffect(() => {
    const setFromEvent = (e: MouseEvent) => {
      setPosition({
        x: e.clientX - ref.current?.clientWidth! / 2,
        y: e.clientY - ref.current?.clientHeight! / 2,
      });
    };

    window.addEventListener("mousemove", setFromEvent);
    return () => window.removeEventListener("mousemove", setFromEvent);
  }, []);

  console.log(position);
  return position;
};
