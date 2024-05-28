import { useReducer, useEffect } from "react";
import { fetchImages } from "../../public-api/fetchAPI";
import { fetchReducer } from "../../reducer/fetchReducer";
import { ActionType, State } from "../../reducer/types";
import Marquee from "react-fast-marquee";

function Marqueetest() {
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
  /*   useEffect(() => {
    console.log("State data after success dispatch", state.data);
  }, [state.data]); */
  return (
    <div className="m-6">
      {state.isError && <div>Error fetching data</div>}
      {state.isLoading ? (
        <div>Loading....</div>
      ) : (
        <div>
          <Marquee className="" direction="right">
            {state.data.map((image,index) => (
              <div key={index}>
                <img
                  src={image.imageURL}
                  style={{ height: 300 }}
                  alt="Image 1"
                />
              </div>
            ))}
          </Marquee>
          <Marquee className="">
            {state.data.map((image,index) => (
              <div key={index}>
                <img
                  src={image.imageURL}
                  style={{ height: 300 }}
                  alt="Image 1"
                />
              </div>
            ))}
          </Marquee>
        </div>
      )}
    </div>
  );
}

export default Marqueetest;
