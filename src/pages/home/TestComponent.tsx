import { useReducer, useEffect } from "react";
import { fetchImages } from "../../public-api/fetchAPI";
import { fetchReducer } from "../../reducer/fetchReducer";
import { ActionType, State } from "../../reducer/types";
function TestComponent() {
  const initialState: State = {
    isLoading: false,
    isError: false,
    data: [],
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const getData = async () => {
    dispatch({ type: ActionType.FETCH_INIT });
    try {
      const results = await fetchImages();

      dispatch({ type: ActionType.FETCH_SUCCESS, payload: results });
    } catch {
      dispatch({ type: ActionType.FETCH_FAILURE });
    }
  };
  useEffect(() => {
    getData();
  }, []);
  /* useEffect(() => {
    console.log("State data after success dispatch", state.data);
  }, [state.data]);  */
  return (
    <div className="">
      {state.isError && <div>Error fetching data</div>}

      {state.isLoading ? (
        <div>Loading....</div>
      ) : (
        <div>Images: {JSON.stringify(state.data)}</div>
      )}
    </div>
  );
}

export default TestComponent;
