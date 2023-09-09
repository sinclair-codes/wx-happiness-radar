import React from "react";

function BackgroundImage({ x, y, source }) {
  return (
    <div className={`absolute ${x} ${y} opacity-50`}>
      <img
        src={source}
        className="h-[100px] w-[100px]"
        alt="Meaningless image to make the background look nice."
      />
    </div>
  );
}

export function O({ x, y }) {
  return BackgroundImage({ x, y, source: "background/O.png" });
}

export function S({ x, y }) {
  return BackgroundImage({ x, y, source: "background/S.png" });
}

export function X({ x, y }) {
  return BackgroundImage({ x, y, source: "background/X.png" });
}
