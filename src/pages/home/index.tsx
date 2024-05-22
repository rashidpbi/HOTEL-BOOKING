import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import BestHotel from './BestHotel'
import HotelGallery from './HotelGallery'
import CustomerReview from '../customer-reviews'

function Home() {
  return (
    <div>
      <CustomerReview/>
        <Navbar/>
    <Banner/>
<BestHotel/>
<HotelGallery/>
    </div>
  )
}

export default Home
