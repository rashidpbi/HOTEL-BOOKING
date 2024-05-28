import {  useEffect ,useContext} from "react";

import Marquee from "react-fast-marquee";
import Context from "../../context/Context";

function Marqueetest() {
 

  const {state,getImageData} = useContext(Context)
  
  useEffect(() => {
    getImageData();
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
