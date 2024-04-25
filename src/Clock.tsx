import { useState } from "react";
import Number from "./Number";
import useClock from "./useClock";

export default function Clock() {
  const [twelveHourMode, setTwelveHourMode] = useState(false);
  const { hours, minutes, seconds } = useClock();
  const hoursDisplay = twelveHourMode && hours > 12 ? hours - 12 : hours;
  return (
    <div className="container">
      <div className="clock">
        <Number displayNum={Math.floor(hoursDisplay / 10)} />
        <Number displayNum={hoursDisplay % 10} />
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <Number displayNum={Math.floor(minutes / 10)} />
        <Number displayNum={minutes % 10} />
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <Number displayNum={Math.floor(seconds / 10)} />
        <Number displayNum={seconds % 10} />
      </div>
      {twelveHourMode && (
        <div className="AM-PM">
          <Number displayNum={hours > 12 ? 11 : 10} />
          <Number displayNum={12} />
          <Number displayNum={13} />
        </div>
      )}
      <button onClick={() => setTwelveHourMode(!twelveHourMode)}>
        <Number displayNum={twelveHourMode ? 2 : 1} />
        <Number displayNum={twelveHourMode ? 4 : 2} />
        <Number displayNum={14} />
        <Number displayNum={15} />
      </button>
    </div>
  );
}
