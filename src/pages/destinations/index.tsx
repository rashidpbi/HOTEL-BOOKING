import React from 'react'
import TopLocation from './TopLocation'

function Destinations() {
  return (
    <div>
       <div className='grid h-24 mt-12'>
        <h1 className='bg-red-200 justify-self-center  self-center'>EXPLORE MOST POPULAR DESTINATIONS</h1>
        <p className='justify-self-center  self-center'>Explore our popular destination. This location based on user demand</p>
      </div>
      <TopLocation/>
    </div>
  )
}

export default Destinations
