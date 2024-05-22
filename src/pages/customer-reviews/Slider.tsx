import React from "react";
import Slider from "react-slick";
import HotelImage from '../../assets/images/Hotel.jpg'
export default function Sliders() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-slate-500 h-36 m-6">
        <Slider {...settings} className=" m-3">
        {/* <div><img src={HotelImage} style={{height:300}}alt="Image 1" /></div> */}
         
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
    </div>
  );
}