import { useEffect, useState } from "react";
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
export default function useClock() {
  const [time, setTime] = useState({
    hours,
    minutes,
    seconds,
  });
  useEffect(() => {
    function getCurrentTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      setTime({ hours, minutes, seconds });
    }
    setInterval(getCurrentTime, 1000);
  }, []);
  return { hours: time.hours, minutes: time.minutes, seconds: time.seconds };
}
