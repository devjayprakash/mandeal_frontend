const { default: axios } = require("axios");
let redux = require("redux");
const { AUTH, USER_DATA } = require("./type");
let { extractCookies } = require("../utility");

let defaultState = async () => {
  let token = extractCookies(document.cookie).jwt;

  if (token === undefined || token === null || token === "") {
    try {
      let res = await axios.post("/api/v1/auth/verifyToken", { token: token });

      if (res.res) {
        return {
          auth: true,
          userdetail: res.data.userdetail,
        };
      }
    } catch (err) {
      return {
        auth: false,
        userdetail: null,
      };
      console.log(err);
    }
  } else {
    return {
      auth: false,
      userdetail: null,
    };
  }
};

function reducerFunction(state = defaultState, actions) {
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

let store = redux.createStore(reducerFunction);

module.exports = store;
