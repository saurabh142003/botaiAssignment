import React from 'react'

function Header() {
  return (
    <div className='flex flex-col items-center justify-center p-4 sm:p-10'>
        <p className='font-semibold text-center sm:text-start text-2xl sm:text-[48px]'>Find Your Perfect <span className='text-[#B138C9]'>Rental Home</span></p>
        <p className='text-center mt-3 sm:mt-6 font-medium text-sm sm:text-base text-[#666666]'>Beautifully curated rental homes that perfectly match your style and needs, making your <br />search for the ideal living space effortless and enjoyable.</p>
    </div>
  )
}

export default Header