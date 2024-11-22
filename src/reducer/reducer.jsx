import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { DECREMENT, INCREMENT } from "./actions/action";
import { userReducer } from "./userReducer";
import logger from "redux-logger";

const initialState = { count: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const myReducers = combineReducers({
  counter: reducer,
  user: userReducer,
});

const myStore = createStore(myReducers, applyMiddleware(thunk, logger));

export default myStore;
