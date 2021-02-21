import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { getStocks } from "./actions";

import Summary from "./components/summary/Summary";
import Log from "./components/logs/Log";

const App = () => {
  const dispatch = useDispatch();

  //http polling == bad!! could use realtime database or websockets.
  useEffect(() => {
    setInterval(() => {
      dispatch(getStocks());
    }, 2000);
  }, [dispatch]);

  return (
    <>
      <div style={{ width: "50%", float: "right", margin: "10px" }}>
        <Summary />
      </div>
      <div style={{ margin: "10px" }}>
        <Log />
      </div>
    </>
  );
};
export default App;
