import React, { useState } from "react";
import DateTimePicker from "./components/DateTimePicker";
import CountdownTimer from "./components/CountdownTimer";

function App() {
  const [targetDateTime, setTargetDateTime] = useState("");

  const handleStartTimer = (dateTime) => {
    setTargetDateTime(dateTime);
  };

  return (
    <div className="app-container">
      <h1 className="title">
        <span style={{ color: "white" }}>Countdown </span>
        <span className="title-text">Timer</span>
      </h1>
      <DateTimePicker onStartTimer={handleStartTimer} />
      {targetDateTime && <CountdownTimer targetDateTime={targetDateTime} />}
    </div>
  );
}

export default App;
