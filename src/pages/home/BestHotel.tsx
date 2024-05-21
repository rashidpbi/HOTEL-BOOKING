import React from 'react'
import HotelImage from "../../assets/images/Hotel.jpg"
function BestHotel() {

  return (
    <div className='grid'>
      <div className='grid h-24 mt-12'>
        <h1 className='bg-red-200 justify-self-center  self-center'>DISCOVER OUR BEST HOTEL</h1>
        <p className='justify-self-center  self-center'>Discover a curated selection of the world's finest hotels, where opulence meets comfort.</p>
      </div>
      <div className='grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 justify-between p-8 '>
        <div><img src={HotelImage}className='h-96 w-auto p-4' alt='image'/></div>
        <div><img src={HotelImage}className='h-96 w-auto p-4' alt='image'/></div>
        <div><img src={HotelImage}className='h-96 w-auto p-4' alt='image'/></div>
        <div><img src={HotelImage}className='h-96 w-auto p-4' alt='image'/></div>
      </div>
    </div>
  )
}

export default BestHotel
