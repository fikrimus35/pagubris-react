import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userSignUpReducer,
  userInfoReducer,
} from "./reducers/userReducers";
import { listThreadsReducer, postThreadReducer } from "./reducers/threadReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userSignUp: userSignUpReducer,
  userInfo: userInfoReducer,
  postThread: postThreadReducer,
  listThreads : listThreadsReducer
});

const isAuthenticated = localStorage.getItem("token") ? true : false;

const initialState = {
  userLogin: { isAuthenticated },
  userInfo: { userInfo: {} },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
