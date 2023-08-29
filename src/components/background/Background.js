import React from "react";
import { O, S, X } from "./BackgroundImage";

export default function Background({ backgroundColor, children }) {
  return (
    <div className={`h-screen w-screen relative ${backgroundColor}`}>
      <X x="right-[-50px]" y="top-[150px]" />
      <O x="right-[125px]" y="top-[50px]" />
      <S x="right-[-20px]" y="top-[0px]" />
      <X x="left-[0px]" y="bottom-[125px]" />
      <O x="left-[90px]" y="bottom-[-30px]" />
      <S x="left-[-50px]" y="bottom-[-30px]" />
      {children}
    </div>
  );
}
