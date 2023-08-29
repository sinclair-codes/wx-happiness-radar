import React from "react";
import CenterContent from "./ContentGroup";
import { BackButton, PrimaryButton } from "../Button";
import {
  TEXT_XERO_NAVY,
  BORDER_XERO_NAVY,
  BG_HIGHLIGHT_BLUE,
} from "../../colors";

export default function QuestionCollection({
  question,
  setQuestion,
  previousScreen,
  nextScreen,
}) {
  return (
    <CenterContent>
      <BackButton onClick={previousScreen} />
      <div />
      <div className="space-y-4">
        <span className={`text-3xl font-bold ${TEXT_XERO_NAVY}`}>
          What are you asking Xero&apos;s today?
        </span>
        <input
          type="text"
          className={`appearance-none ${BG_HIGHLIGHT_BLUE} focus:bg- border-b-2 ${BORDER_XERO_NAVY}  w-full  py-2 px-2 focus:outline-none`}
          placeholder={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />
      </div>
      <div id="bottom-buttons" className="w-full">
        <PrimaryButton onClick={nextScreen}>Confirm</PrimaryButton>
      </div>
    </CenterContent>
  );
}
