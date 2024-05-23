import Marquee from "react-fast-marquee";
import HotelImage from "../../assets/images/Hotel.jpg"

const Marquees = () => {
  return (
    <div className="">
      <div className='grid h-24 mt-12'>
        <h1 className='bg-red-200 justify-self-center  self-center'>DISCOVER OUR BEST HOTEL</h1>
        <p className='justify-self-center  self-center'>Discover a curated selection of the world's finest hotels, where opulence meets comfort.</p>
      </div>
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
    </div>
  );
};

export default Marquees;
