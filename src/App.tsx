
import './App.css'
import CustomerReview from './pages/customer-reviews'
import Destinations from './pages/destinations'
import Footer from './pages/footer'
import Home from './pages/home'

// make relative imports - paths are all related to a specific folder
// example : ~src/pages/customer-reviews

function App() {



  return (
    <>
      <div className=''>

        <Home />
        <Destinations />
        <CustomerReview />
        <Footer />
      </div>
    </>
  )
}

export default App
