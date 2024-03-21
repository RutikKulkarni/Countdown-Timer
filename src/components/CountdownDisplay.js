import React, { useState } from "react";

const CountdownDisplay = ({ days, hours, minutes, seconds }) => {
  const [countdownFinished, setCountdownFinished] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  if (
    days === 0 &&
    hours === 0 &&
    minutes === 0 &&
    seconds === 0 &&
    !countdownFinished
  ) {
    setCountdownFinished(true);
  }

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setCountdownFinished(false);
  };

  return (
    <div className="countdown-display">
      {countdownFinished ? (
        <p>🎉 The countdown is over! What's next on your adventure? 🎉</p>
      ) : (
        <>
          <div className="countdown-box">
            <h1>{days >= 1 ? `${days}` : "00"}</h1>
            <p className="countdown-label">Days</p>
          </div>
          <div className="countdown-box">
            <h1>{days >= 1 || hours >= 1 ? `${formatTime(hours)}` : "00"}</h1>
            <p className="countdown-label">Hours</p>
          </div>
          <div className="countdown-box">
            <h1>
              {days >= 1 || hours >= 1 || minutes >= 1
                ? `${formatTime(minutes)}`
                : "00"}
            </h1>
            <p className="countdown-label">Minutes</p>
          </div>
          <div className="countdown-box">
            <h1>{countdownFinished ? "00" : formatTime(seconds)}</h1>
            <p className="countdown-label">Seconds</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CountdownDisplay;
