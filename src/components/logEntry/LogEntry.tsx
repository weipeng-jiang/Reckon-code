import React from "react";

import { Stock } from "../../actions";

const LogEntry = ({ time, stocks }) => {
  return (
    <div>
      {time && `Updates for ${time}`}
      {stocks?.map(({ code, price }: Stock) => (
        <div key={code}>{`${code} : $${price}`}</div>
      ))}
      <br />
    </div>
  );
};

export default LogEntry;
