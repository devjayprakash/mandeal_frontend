import { AUTH, USER_DATA } from "./type";
import { createStore } from "redux";

let defaultState = () => {
  return {
    auth: false,
    userdetail: null,
  };
};

function reducerFunction(state = defaultState(), actions) {
  switch (actions.type) {
    case AUTH: {
      return {
        ...state,
        auth: actions.payload,
      };
    }
    case USER_DATA: {
      return {
        ...state,
        userdetail: null,
      };
    }
    default: {
      return state;
    }
  }
}

let store = createStore(reducerFunction);

export default store;
