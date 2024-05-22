import Marquee from "react-fast-marquee";
import HotelImage from "../../assets/images/Hotel.jpg"

const Marquees = () => {
  return (
    <div className="bg-white animate-pulse">
      
      <Marquee delay={1} direction="left" className="my-1">
      <div><img src={HotelImage} alt="Image 1" /></div>
          <div><img src={HotelImage} alt="Image 2" /></div>
          <div><img src={HotelImage} alt="Image 3" /></div>
          <div><img src={HotelImage} alt="Image 1" /></div>
          <div><img src={HotelImage} alt="Image 2" /></div>
          <div><img src={HotelImage} alt="Image 3" /></div>
          <div><img src={HotelImage} alt="Image 1" /></div>
          <div><img src={HotelImage} alt="Image 2" /></div>
          <div><img src={HotelImage} alt="Image 3" /></div>
          <div><img src={HotelImage} alt="Image 1" /></div>
          <div><img src={HotelImage} alt="Image 2" /></div>
          <div><img src={HotelImage} alt="Image 3" /></div>
      </Marquee>

      <Marquee direction="right" className="my-1">
      <div><img src={HotelImage} alt="Image 1" /></div>
          <div><img src={HotelImage} alt="Image 2" /></div>
          <div><img src={HotelImage} alt="Image 3" /></div>
          <div><img src={HotelImage} alt="Image 1" /></div>
          <div><img src={HotelImage} alt="Image 2" /></div>
          <div><img src={HotelImage} alt="Image 3" /></div>
          <div><img src={HotelImage} alt="Image 1" /></div>
          <div><img src={HotelImage} alt="Image 2" /></div>
          <div><img src={HotelImage} alt="Image 3" /></div>
          <div><img src={HotelImage} alt="Image 1" /></div>
          <div><img src={HotelImage} alt="Image 2" /></div>
          <div><img src={HotelImage} alt="Image 3" /></div>
      </Marquee>
    </div>
  );
};

export default Marquees;
