import React from 'react'
import { FaStar } from "react-icons/fa";
function FlatCard({ name, beds, discountedPrice, originalPrice, img, description }) {
    return (
        <div className='sm:w-[406px] w-full p-3 sm:p-0 h-[420px] flex flex-col gap-2'>
            <div className='h-[286px] w-full sm:w-[406px]'>
                <img className='w-full rounded-2xl h-full' src={img} alt="" />
            </div>
            <div className='flex justify-between'>
                <p className='text-xl text-[#222222] font-bold'>{name}</p>
                <div className='flex gap-2 items-center justify-center'>
                    <FaStar color='blue' />
                    <p>4.94(31)</p>
                </div>
            </div>
            <p>{description}</p>
            <p>{beds}</p>
            <div className='flex gap-3'>
                <p className="line-through">${originalPrice}</p>
                <p className='font-semibold'>${discountedPrice} month</p>

            </div>
        </div>
    )
}

export default FlatCard