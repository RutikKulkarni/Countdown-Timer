import React, { useState, useEffect } from "react";
import CountdownDisplay from "./CountdownDisplay";

const CountdownTimer = ({ targetDateTime }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDateTime) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="countdown-timer">
      <CountdownDisplay {...timeLeft} />
    </div>
  );
};

export default CountdownTimer;
