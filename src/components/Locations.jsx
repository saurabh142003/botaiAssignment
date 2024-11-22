import React from 'react'
import map from '../../images/map.png'
function Locations() {
    return (
        <div className='w-full py-6 flex flex-col sm:flex-row gap-4 px-10 items-center justify-center'>
            <div className='sm:w-1/2 w-full flex flex-col gap-2'>
                <div className="flex justify-between border-b-2 p-4 border-gray-400">
                    <div className="flex gap-4">
                        <p className="font-bold">Mira Road</p>
                        <p className="text-sm text-[#666666]">₹9.6K/sq.ft</p>
                    </div>
                    <div className="text-[#00A925]">
                        1.57%
                    </div>
                </div>
                <div className="flex justify-between border-b-2 p-4 border-gray-400">
                    <div className="flex gap-4">
                        <p className="font-bold">Andheri west</p>
                        <p className="text-sm text-[#666666]">₹9.6K/sq.ft</p>
                    </div>
                    <div className="text-[#00A925]">
                        1.57%
                    </div>
                </div>
                <div className="flex justify-between border-b-2 p-4 border-gray-400">
                    <div className="flex gap-4">
                        <p className="font-bold">Chembur</p>
                        <p className="text-sm text-[#666666]">₹9.6K/sq.ft</p>
                    </div>
                    <div className="text-[#00A925]">
                        1.57%
                    </div>
                </div>
                <div className="flex justify-between border-b-2 p-4 border-gray-400">
                    <div className="flex gap-4">
                        <p className="font-bold">Borivali west </p>
                        <p className="text-sm text-[#666666]">₹9.6K/sq.ft</p>
                    </div>
                    <div className="text-[#00A925]">
                        1.57%
                    </div>
                </div>
                <div className="flex justify-between border-b-2 p-4 border-gray-400">
                    <div className="flex gap-4">
                        <p className="font-bold">Malad west</p>
                        <p className="text-sm text-[#666666]">₹9.6K/sq.ft</p>
                    </div>
                    <div className="text-[#00A925]">
                        1.57%
                    </div>
                </div>
                <div className="flex justify-between border-b-2 p-4 border-gray-400">
                    <div className="flex gap-4">
                        <p className="font-bold">Kandivali west</p>
                        <p className="text-sm text-[#666666]">₹9.6K/sq.ft</p>
                    </div>
                    <div className="text-[#00A925]">
                        1.57%
                    </div>
                </div>

            </div>
            <div className='w-1/2'>
                <img src={map} alt="" />
            </div>
        </div>
    )
}

export default Locations