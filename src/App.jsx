import React, { useEffect, useState } from 'react'
import HomePage from './component/HomePage'
import Navbar from './component/Navbar'
import FilterBar from './component/FilterBar'

import { allCategory } from './utils/AllCategory'; 


const App = () => {
  // console.log(allCategory[0].action.text)

  const [filteredData, setFilteredData] = useState(allCategory);

  const handleSearch = (query) => {
    
    const filtered = allCategory.filter((item) =>
      item.action.text.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

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
      {/* <Navbar/> */}
      
    {/* <HomePage/> */}

    <Navbar handleSearch={handleSearch} /><FilterBar/>
      <HomePage filteredData={filteredData} />
    </div>
  )
}

export default App