import React, { useState } from "react";
import LogEntryList from "../logEntryList/LogEntryList";

const Log = () => {
  const [logDisabled, setLogDisabled] = useState<boolean>(false);

  const pauseResumeLogs = () => {
    setLogDisabled(prevState => !prevState);
  };

  return (
    <>
      <div>
        <h1 style={{ display: "inline" }}>Log</h1>
        <button style={{ float: "right" }} onClick={pauseResumeLogs}>
          {logDisabled ? "Resume" : "Pause"}
        </button>
      </div>
      <div
        style={{
          height: "700px",
          overflowY: "auto",
          border: "3px solid black"
        }}
      >
        <LogEntryList logDisabled={logDisabled} />
      </div>
    </>
  );
};

export default Log;
