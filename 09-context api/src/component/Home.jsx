import React, { useContext } from 'react'
import { ProductData } from '../context/DataContext'

const Home = () => {
  const [theme, setTheme] = useContext(ProductData)
  return (
  <>
    
   sahilll --{[theme, setTheme]}

  </>
  )
}

export default Home