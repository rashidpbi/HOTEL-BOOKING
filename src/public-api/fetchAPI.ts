import axios from "axios";

const fetchImages = async () => {
  const response = await axios.get(
    "https://hotel-haven-backend.vercel.app/public/gallery"
  );

  return response.data;
};
export { fetchImages };
