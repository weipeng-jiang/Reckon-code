import React from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

import SummaryEntry from "../summaryEntry/SummaryEntry";
import { Stock } from "../../actions";

const Summary = () => {
  const stocksList = useSelector(state => state.stocks.stocks);

  return (
    <div>
      <h1>Summary</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Starting</th>
            <th>Lowest</th>
            <th>Highest</th>
            <th>Current</th>
          </tr>
        </thead>
        <tbody>
          {stocksList?.map(({ code, price }: Stock) => (
            <tr>
              <SummaryEntry code={code} price={price} />
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Summary;
