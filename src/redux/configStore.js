import { combineReducers, createStore } from "redux";
import { bookingTicketReducer } from "./bookingTicketReducer";

const rootReducer = combineReducers({
  bookingTicketReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
