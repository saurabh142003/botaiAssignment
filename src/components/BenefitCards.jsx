import React from 'react'
import frame1 from '../../images/frame1.png'
import frame2 from '../../images/frame2.png'
import frame3 from '../../images/frame3.png'

function BenefitCards() {
  return (
    <div className='sm:py-6 py-3 px-3 sm:px-0 flex sm:flex-row sm:items-center flex-col overflow-x-scroll sm:justify-center gap-2 sm:gap-5'>
        <div className='sm:w-[338px] w-full flex flex-col items-center p-3 rounded-xl gap-10 border border-gray-400 h-[370px]'>
            <div>
                <img  src={frame1} alt="" />
            </div>
            <p className='font-bold text-xl text-center'>Match with your <br />ideal roommate</p>
        </div>
        <div className='sm:w-[338px] w-full flex flex-col items-center p-3 rounded-xl gap-10 border border-gray-400 h-[370px]'>
            <div>
                <img  src={frame2} alt="" />
            </div>
            <p className='font-bold text-xl text-center'>Seamless communication</p>
        </div>
        <div className='sm:w-[338px] w-full flex flex-col items-center p-3 rounded-xl gap-10 border border-gray-400 h-[370px]'>
            <div>
                <img  src={frame3} alt="" />
            </div>
            <p className='font-bold text-xl text-center'>Discover activities <br />around you</p>
        </div>
       

    </div>
  )
}

export default BenefitCards