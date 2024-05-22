import HotelImage from "../../assets/images/Hotel.jpg"

import Marquee from "react-fast-marquee";

import React from 'react'

function Marqueetest() {
  return (
    <div className="m-6">
      <Marquee className="" direction="right">
      <div><img src={HotelImage} style={{height:300}}alt="Image 1" /></div>
      <div><img src={HotelImage} style={{height:300}}alt="Image 1" /></div>
      <div><img src={HotelImage} style={{height:300}}alt="Image 1" /></div>
         </Marquee>
      <Marquee className="">
      <div><img src={HotelImage} style={{height:300}}alt="Image 1" /></div>
      <div><img src={HotelImage} style={{height:300}}alt="Image 1" /></div>
      <div><img src={HotelImage} style={{height:300}}alt="Image 1" /></div>
         </Marquee>
    </div>
  ) 
}

export default Marqueetest
