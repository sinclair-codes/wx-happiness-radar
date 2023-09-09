import React from "react";
import { BG_XERO_NAVY, TEXT_XERO_NAVY } from "../colors";
import Image from "next/image";

export function PrimaryButton({ children, onClick }) {
  return (
    <div
      className={`rounded ${BG_XERO_NAVY} text-white font-semibold w-full text-center py-2 px-4`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export function SecondaryButton({ children, onClick }) {
  // Currently unused, but was in Figma
  return (
    <div
      className={`rounded ${TEXT_XERO_NAVY} font-semibold w-full text-sm text-center py-2 px-4`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export function TertiaryButton({ children, onClick }) {
  // Currently unused, but was in Figma
  return (
    <div
      className={`rounded  bg-white ${TEXT_XERO_NAVY} text-xs font-semibold text-center py-1 px-2`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export function BackButton({ onClick }) {
  return (
    <div
      className={`rounded absolute top-0 left-0 ${TEXT_XERO_NAVY} text-xs font-semibold text-center`}
      onClick={onClick}
    >
      <Image src="back-arrow.svg" alt="back arrow" width={40} height={40} />
    </div>
  );
}
