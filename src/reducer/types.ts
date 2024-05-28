export enum ActionType {
  FETCH_INIT = "FETCH_INIT",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_FAILURE = "FETCH_FAILURE",
}
export interface FetchInitAction {
  type: ActionType.FETCH_INIT;
}
export interface Images {
  _id: string;
  alt: string;
  imageURL: string;
}
export interface FetchSucessAction {
  type: ActionType.FETCH_SUCCESS;
  payload: Images[];
}
export interface FetchFailureAction {
  type: ActionType.FETCH_FAILURE;
}

export interface State {
  isLoading: boolean;
  isError: boolean;
  data: Images[];
}
export type Action = FetchInitAction | FetchFailureAction | FetchSucessAction;
