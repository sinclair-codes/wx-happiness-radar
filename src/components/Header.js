import React from "react";
import { TEXT_XERO_NAVY } from "../colors";

export default function Header({
  children,
  color = TEXT_XERO_NAVY,
  textCenter = true,
}) {
  return (
    <h1
      className={`sm:text-3xl font-bold ${color} ${
        textCenter ? "text-center" : "text-left"
      }`}
    >
      {children}
    </h1>
  );
}
