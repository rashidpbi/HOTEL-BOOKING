import { useEffect, useContext } from "react";
import { fetchImages } from "../../public-api/fetchAPI";
import { ActionType } from "../../reducer/types";
import Marquee from "react-fast-marquee";
import Context from "../../context/Context";

function Marqueetest() {


  const { state, dispatch } = useContext(Context) // making a hook for the context simplifies it implementation
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
            {state.data.map((image, index) => (
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
            {state.data.map((image, index) => (
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
