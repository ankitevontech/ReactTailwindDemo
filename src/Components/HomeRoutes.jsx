import React from 'react'
import Banner from './Banner'
import Experts from './Experts'
import Faq from './Faq'
import Footer from './Footer'
import Header from './Header'
import NewsLetter from './NewsLetter'
import Plans from './Plans'


const HomeRoutes = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <Experts/>
    <NewsLetter/>
    <Plans/>
    {/* <Footer/> */}
    <Faq/>
    
    
    
    </>
  )
}

export default HomeRoutes