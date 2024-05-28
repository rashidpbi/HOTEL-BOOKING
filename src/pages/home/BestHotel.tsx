import { useContext } from "react";
import Context from "../../context/Context";
function BestHotel() {
  const { state } = useContext(Context);
  const data = state?.data?.slice(0, 8);
  return (
    <div className="grid">
      <div className="grid h-24 mt-12">
        <h1 className="bg-red-200 justify-self-center  self-center">
          DISCOVER OUR BEST HOTEL
        </h1>
        <p className="justify-self-center  self-center">
          Discover a curated selection of the world's finest hotels, where
          opulence meets comfort.
        </p>
      </div>
      <div className="grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 justify-between p-8 ">
        {data.map((image) => (
          <div>
            <img src={image.imageURL} className="h-96 w-auto p-4" alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestHotel;
