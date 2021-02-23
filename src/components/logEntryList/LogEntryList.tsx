import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { StockDateTime } from "../../actions";
import LogEntry from "../logEntry/LogEntry";

const LogEntryList = ({ logDisabled }) => {
  const stocks = useSelector(state => state.stocks);

  const [fullStocksList, setFullStocksList] = useState([]);

  useEffect(() => {
    if (!logDisabled && stocks) {
      setFullStocksList([stocks, ...fullStocksList]); // This will get large over time, but for the purpose of this test, it'll suvice.
    }
  }, [stocks]);

  return (
    <div style={{ margin: "4px" }}>
      {fullStocksList?.map(({ time, stocks }: StockDateTime) => (
        // Time is unique in this app.
        <LogEntry key={time} time={time} stocks={stocks} />
      ))}
    </div>
  );
};

export default LogEntryList;
