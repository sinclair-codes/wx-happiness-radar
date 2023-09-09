import LandingScreen from "./Landing";
import QuestionCollection from "./QuestionCollection";
import Feedback from "./Feedback";
import Exit from "./Exit";

export default function CurrentScreen({
  screenIndex,
  nextScreen,
  previousScreen,
  question,
  setQuestion,
}) {
  var screens = [
    <LandingScreen key="landing" nextScreen={nextScreen} />,
    <QuestionCollection
      key="question"
      question={question}
      setQuestion={setQuestion}
      previousScreen={previousScreen}
      nextScreen={nextScreen}
    />,
    <Feedback key="feedback" nextScreen={nextScreen} question={question} />,
    <Exit key="exit" nextScreen={nextScreen} />,
  ];
  var component = screens[screenIndex];

  return (
    <div className="h-full w-full flex items-center justify-center p-4 sm:p-16">
      {component}
    </div>
  );
}
