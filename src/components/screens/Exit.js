import React from "react";
import ContentGroup from "./ContentGroup";
import { TertiaryButton } from "../Button";
import Header from "../Header";
import { TEXT_XERO_NAVY } from "../../colors";

export default function Exit({ previousScreen }) {
  return (
    <ContentGroup>
      <div></div>
      <div className="flex flex-col w-full space-y-4 text-center items-center">
        <Header>Event Ended!</Header>
        <span className={TEXT_XERO_NAVY}>
          Check out the results on Google Drive!
        </span>
        <div>
          <TertiaryButton onClick={previousScreen}>Take Me Back</TertiaryButton>
        </div>
      </div>
      <div></div>
    </ContentGroup>
  );
}
