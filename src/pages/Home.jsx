import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import FlatCards from '../components/FlatCards'

function Home() {
  return (
    <div className='bg-[#F3F5FD] pb-4'>
        <Header/>
        <Navigation/>
        <FlatCards/>
        <div className='flex justify-center items-center'>
            <button className='bg-[#0D28AB] text-sm text-white p-4 rounded-full'>View All</button>
        </div>
    </div>
  )
}

export default Home