import { useState } from "react";

import useClock from "./hooks/useClock";
import Display from "./components/Segment";

export default function Clock() {
  const [twelveHourMode, setTwelveHourMode] = useState(false);
  const { hours, minutes, seconds } = useClock();
  const hoursDisplay = twelveHourMode && hours > 12 ? hours - 12 : hours;
  return (
    <div className="container">
      <div className="clock">
        <Display input={Math.floor(hoursDisplay / 10)} />
        <Display input={hoursDisplay % 10} />
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <Display input={Math.floor(minutes / 10)} />
        <Display input={minutes % 10} />
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <Display input={Math.floor(seconds / 10)} />
        <Display input={seconds % 10} />
      </div>
      {twelveHourMode && (
        <div className="AM-PM">
          <Display input={hours > 12 ? "P" : "A"} />
          <Display input={"M"} />
        </div>
      )}
      <button onClick={() => setTwelveHourMode(!twelveHourMode)}>
        <Display input={!twelveHourMode ? 2 : 1} />
        <Display input={!twelveHourMode ? 4 : 2} />
        <Display input={"H"} />
        <Display input={"R"} />
      </button>
    </div>
  );
}
