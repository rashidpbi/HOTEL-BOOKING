import React from "react";
import Slider from "react-slick";
import { nextArrow,prevArrow } from "@material-tailwind/react/types/components/carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HotelImage from '../../assets/images/Hotel.jpg'
import { TestimonialCard } from "./TestimonialCard";
export default function Sliders() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: (
      <div>
        <div className="next-slick-arrow rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
        </div>
      </div>
    ),
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
        </div>
      </div>
    ),

    
  };
  
  return (
    <div className=" h-96  m-10 ">
      <h2>Carousel Component</h2>
      <Slider {...settings}>
        <div className=" ">
          <TestimonialCard/>
        </div>
        <div className=" ">
        <TestimonialCard/>
        </div>
        <div className=" ">
        <TestimonialCard/>
        </div>
        
      </Slider>
      
    </div>
  );
}