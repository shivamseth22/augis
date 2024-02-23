import React, { useEffect } from 'react'
import HomePage from './component/HomePage'
import Navbar from './component/Navbar'
import FilterBar from './component/FilterBar'

const App = () => {

  // useEffect(()=>{
  //   const data = async () => {
  //     // alert("lhivaodjk")
  //     const j = await fetch('https://run.mocky.io/v3/02af7fc5-721b-45c4-9f3f-faf185586413')
  //     const json = await j.json();
  //     console.log('sbjas')
      
  //   }
  //   data();
  // },[])
  return (
    <div>
      <Navbar/>
      <FilterBar/>
    <HomePage/>
    </div>
  )
}

export default App