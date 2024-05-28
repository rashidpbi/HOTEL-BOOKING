import { State, Action, ActionType } from "./types";

export const fetchReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case ActionType.FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case ActionType.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    default:
      throw new Error();
  }
};
