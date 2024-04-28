import React from 'react'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Filter from '../components/Filter'
import HouseCards from '../components/HouseCards'

const Home = () => {
  return (
    <>
    <div className='w-[100%] border-b'>
    <div className='w-[88%] mx-auto'>
      <Header />
    </div>
    </div>
    <Intro />
    <Filter />
    <HouseCards />
    </>
  )
}

export default Home