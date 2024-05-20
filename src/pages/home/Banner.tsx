import React from 'react'

function Banner() {
    const onSubmit = (e)=>{
e.preventDefault();
console.log(e)
    }
  return (
    <div className="bg-[url('https://cdn.pixabay.com/photo/2021/09/22/08/35/architecture-6646154_1280.jpg')] ">
       <div>
       Discover
Tranquility at Grand Hotel
Welcome to Grand Hotel, where luxury meets serenity.
       </div>
       <div>
       
       </div>
      <form onSubmit={onSubmit}>
          <label htmlFor="destinations">choose ur destination</label>
         <select id='destinations' title='destinations'>
                <option value="mumbai">mumbai</option>
                <option value="delhi">delhi</option>
                <option value="kolkata">kolkata</option>
         </select>

<input type="submit"/>
      </form>
    </div>
  )
}

export default Banner
