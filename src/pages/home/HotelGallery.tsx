
import React from "react";
import Marqueetest from "./Marqueetest";




const HotelGallery =() => {

  return (
    <div>
        <div className='grid h-24 mt-12'>
        <h1 className='bg-red-200 justify-self-center  self-center'>EXPLORE OUR EXQUISITE HOTEL COLLECTION</h1>
        <p className='justify-self-center  self-center'>Immerse yourself in elegance with our curated selection of world-class hotels.</p>
      </div>
      <Marqueetest/>
    </div>
  );
};
export default HotelGallery;
