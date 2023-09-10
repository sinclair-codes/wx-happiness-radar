import React, { useState, useEffect } from "react";
import CenterContent from "./ContentGroup";
import Header from "../Header";

export default function Feedback({ question }) {
  const [currentlySelectedSmileyName, setSelected] = useState(null);
  const [isShowingThanks, setIsShowingThanks] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  console.log("rerender Feedback");
  console.log("selected", currentlySelectedSmileyName);

  useEffect(() => {
    // Get the user's location when the component mounts
    const getLocation = async () => {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = position.coords;
        setLatitude(latitude); // Save latitude to state
        setLongitude(longitude); // Save longitude to state
      } catch (error) {
        console.error("Error getting user location:", error);
      }
    };

    getLocation();
  }, []); // Empty dependency array ensures this effect runs once on mount

  async function submitFeedback(question, smileyName, lat, long) {
    const url = `https://docs.google.com/forms/d/e/1FAIpQLSeKBFCPZOkzMRtOudAK-91NzKm8OiAnnlnQDC8zNMJ-oJqSFw/formResponse?&submit=Submit&entry.881971892=${question}&entry.851806253=${smileyName}&entry.200176182=${lat}&entry.653180322=${long}`;
    await fetch(url, { mode: "no-cors" });
  }

  function smileyClickHandler(smileyName) {
    if (currentlySelectedSmileyName != null) {
      return; // only submit one smiley at a time
    } else {
      setSelected(smileyName);
      submitFeedback(question, smileyName, latitude, longitude);
      setIsShowingThanks(true);
      // short delay
      setTimeout(() => {
        console.log("in timeout");
        setSelected(null);
        setIsShowingThanks(false);
      }, 2000);
    }
  }

  const allSmileyNames = ["good", "neutral", "bad"];
  const smileys = allSmileyNames.map((smileyName) => (
    <Smiley
      key={smileyName}
      smileyName={smileyName}
      currentlySelectedSmileyName={currentlySelectedSmileyName}
      onClick={() => smileyClickHandler(smileyName, allSmileyNames)}
    />
  ));

  return (
    <CenterContent>
      <div />

      <div className="flex flex-col space-y-4">
        <Header color="text-white">{question}</Header>
        <div className="w-full bg-white rounded p-2 sm:p-8 flex flex-row space-x-4 relative">
          {smileys}
        </div>
        <Thanks visible={isShowingThanks} />
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="space-y-2">
          <div className="text-white font-light w-full text-center">
            Provide more feedback
          </div>
          <img
            src="additional-feedback-qr-code.svg"
            className="max-w-[200px] rounded"
          />
        </div>
      </div>
    </CenterContent>
  );
}

function Smiley({ smileyName, onClick, currentlySelectedSmileyName }) {
  return (
    <div>
      <img
        src={`smileys/${smileyName}.png`}
        alt={smileyName}
        className={`flex-1 ${
          currentlySelectedSmileyName == smileyName
            ? "opacity-100 scale-125"
            : "opacity-75 scale-100"
        }`}
        onClick={onClick}
      />
    </div>
  );
}

function Thanks({ visible }) {
  return (
    <div
      className={`relative flex flex-row justify-center w-full ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-xs sm:text-xl text-white bg-sky-300 bg-opacity-50 rounded p-2">
        Thanks for your feedback! 🎉
      </div>
    </div>
  );
}
