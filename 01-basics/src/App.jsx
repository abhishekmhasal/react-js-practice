
import React from 'react'
import Nav from "./Component/nav.jsx"
import Hero from "./Component/Hero.jsx"
import  Center from "./Component/Center.jsx"
import Top from "./Component/top.jsx"

const App = () => {
  return (
    <div className='main-bg'>
    <div className='background'
    >
         <Top/>
         <Nav/>
         <Hero/>
         <Center/>
    </div>
    </div>
  )
}

export default App