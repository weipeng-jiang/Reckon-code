import React, { useEffect, useState } from "react";

import { Stock } from "../../actions";

const SummaryEntry = ({ code, price }: Stock) => {
  const [starting, setStarting] = useState<number>(null);
  const [lowest, setLowest] = useState<number>(null);
  const [highest, setHighest] = useState<number>(null);
  const [current, setCurrent] = useState<number>(null);

  useEffect(() => {
    setCurrent(price);

    if (!starting) {
      setStarting(price);
      setLowest(price);
      setHighest(price);
    }

    if (price < lowest) {
      setLowest(price);
    }

    if (price > highest) {
      setHighest(price);
    }
  }, [price]);

  return (
    <>
      <td>{code}</td>
      <td>{starting}</td>
      <td>{lowest}</td>
      <td>{highest}</td>
      <td>{current}</td>
    </>
  );
};

export default SummaryEntry;
