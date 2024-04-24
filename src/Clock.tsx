import Number from "./Number";
import useClock from "./useClock";

export default function Clock() {
  const { hours, minutes, seconds } = useClock();
  return (
    <>
      <div className="clock">
        <Number displayNum={Math.floor(hours / 10)} />
        <Number displayNum={hours % 10} />
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
    </>
  );
}
