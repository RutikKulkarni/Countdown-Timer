import React, { useState } from "react";

const DateTimePicker = ({ onStartTimer }) => {
  const [dateTime, setDateTime] = useState("");
  const [error, setError] = useState("");
  const [timerActive, setTimerActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (timerActive) {
      onStartTimer(null);
      setTimerActive(false);
      setDateTime("");
    } else {
      if (!dateTime) {
        setError("Select a valid date and time");
        return;
      }

      const currentDate = new Date();
      const selectedDate = new Date(dateTime);

      const differenceInDays = Math.floor(
        (selectedDate - currentDate) / (1000 * 60 * 60 * 24)
      );

      if (differenceInDays > 100) {
        setError("Selected time is more than 100 days");
        return;
      }

      onStartTimer(dateTime);
      setTimerActive(true);
    }

    setError("");
  };

  return (
    <div className="date-time-picker">
      <form onSubmit={handleSubmit}>
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
        />
        <br />
        <button type="submit">
          {timerActive ? "Cancel Timer" : "Start Timer"}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default DateTimePicker;
