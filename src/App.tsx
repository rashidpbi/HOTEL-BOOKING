
import './App.css'
import CustomerReview from './pages/customer-reviews'
import Destinations from './pages/destinations'
import Footer from './pages/footer'
import Home from './pages/home'
import Hotel from './reducer/Index'

function App() {
 

  return (
    <>
      <div className=''>
        <Hotel/>
     <Home/>
     <Destinations/>
     <CustomerReview/>
    <Footer/>
      </div>
    </>
  )
}

export default App
