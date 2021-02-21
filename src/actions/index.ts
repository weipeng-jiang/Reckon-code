import { Dispatch } from "redux";
import axios from "axios";

export const GET_STOCKS = "GET_STOCKS";
export const HANDLE_ERROR = "HANDLE_ERROR";

export interface Stock {
  code: string;
  price: number;
}

export interface StockDateTime {
  time: string;
  stocks: Stock[];
}

export interface ActionConfig {
  type: string;
  payload: Stock[];
}

export const getStocks = () => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get("https://join.reckon.com/stock-pricing");

    const data: Stock[] = response.data;

    const current = new Date();

    const dataWithTime: StockDateTime = {
      time: current.toLocaleString(),
      stocks: data
    };

    dispatch({ type: GET_STOCKS, payload: dataWithTime });
  } catch (err) {
    console.error(err); // In production app, will log errors to log center (i.e. AWS cloudwatch).
    return;
  }
};
