import { useEffect, useState } from "react";

export default function useCountdown(date: number | Date = Date.now()) {
  const [countdown, setCountdown] = useState({});
  const [timesUp, setTimesUp] = useState(false);
  useEffect(() => {
    function createCountdown() {
      const endDate = new Date(date).getTime();
      const now = new Date().getTime();
      const time = endDate - now;
      const until = {
        days: Math.floor(time / (1000 * 60 * 60 * 24)),
        hours: Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((time % (1000 * 60)) / 1000),
      };
      if (time > 0) {
        setTimesUp(false);
        console.log(until);
        setCountdown(until);
      } else {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        setTimesUp(true);
      }
    }

    const interval = setInterval(createCountdown, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [date]);
  return { timesUp, countdown };
}
