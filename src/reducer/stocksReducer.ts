import { GET_STOCKS, ActionConfig, StockDateTime } from "../actions";

const INITIAL_STATE: StockDateTime = { time: "", stocks: [] };

const stocksReducer = (state = {}, action: ActionConfig) => {
  switch (action.type) {
    case GET_STOCKS:
      return action.payload;
    default:
      return state;
  }
};

export default stocksReducer;
