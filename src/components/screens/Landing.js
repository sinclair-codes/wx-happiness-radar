import React from "react";
import CenterContent from "./ContentGroup";
import Logo from "../Logo";
import { PrimaryButton, SecondaryButton } from "../Button";
import Header from "../Header";

export default function Landing({ nextScreen }) {
  return (
    <CenterContent>
      <div />
      <div className="w-full flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 items-center justify-center">
        <Logo />
        <Header textCenter={true}>
          Happiness <br /> Radar
        </Header>
      </div>
      <div id="bottom-buttons" className="w-full">
        <PrimaryButton onClick={nextScreen}>Begin new event</PrimaryButton>
        <SecondaryButton onClick={nextScreen}>
          Resume last event
        </SecondaryButton>
      </div>
    </CenterContent>
  );
}
