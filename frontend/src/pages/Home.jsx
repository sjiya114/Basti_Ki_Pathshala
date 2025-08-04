import React from 'react'
import Footer from '../components/Footer'
import Results from '../components/Results'
import Review from '../components/Review'
import Banner from '../components/Banner'
import Join from '../components/Join'
import About from '../components/About'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <About/>
        <Join/>
        <Review/>
       <Results/>
      <Footer/>
    </div>
  )
}

export default Home
