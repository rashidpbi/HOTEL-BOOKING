import HotelImage from "../../assets/images/Hotel.jpg"

import React from 'react'

function TopLocation() {
  return (
    <div>
      <div className='grid md:grid-cols-2  lg:grid-cols-3  justify-between p-8 '>
        <div className=" "><img src={HotelImage} className='h-96 w-auto p-4 rounded-[50px]' alt='image'/></div>
        <div className=" "><img src={HotelImage} className='h-96 w-auto p-4 rounded-[50px]' alt='image'/></div>
        <div className=" "><img src={HotelImage} className='h-96 w-auto p-4 rounded-[50px]' alt='image'/></div>
        
      </div>
    </div>
  )
}

export default TopLocation
