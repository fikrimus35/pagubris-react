import {
  POST_THREAD_REQUEST,
  POST_THREAD_SUCCESS,
  POST_THREAD_FAIL,
  LIST_THREAD_REQUEST,
  LIST_THREAD_SUCCESS,
  LIST_THREAD_FAIL,
  LIST_THREAD_RESET,
} from "../constants/threadConstants";

export const postThreadReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_THREAD_REQUEST:
      return { loading: true };
    case POST_THREAD_SUCCESS:
      return { loading: false, success: true, threadInfo: action.payload };
    case POST_THREAD_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const listThreadsReducer = (state = { threads: [] }, action) => {
  switch (action.type) {
    case LIST_THREAD_REQUEST:
      return { loading: true };
    case LIST_THREAD_SUCCESS:
      return { loading: false, success: true, threads: action.payload };
    case LIST_THREAD_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case LIST_THREAD_RESET:
      return {
        threads: [],
      };
    default:
      return state;
  }
};
