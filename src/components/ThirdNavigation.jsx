import React from 'react'
import { useState } from 'react'
function ThirdNavigation() {
    const [activeTag,setActiveTag] = useState('popular')
    function activeHandler(e){
        setActiveTag(e.target.id)
    }
    return (
        <div className='flex items-center justify-center'>
            <ul className='text-base font-semibold overflow-x-scroll capitalize flex gap-3'>
                <li className={`${activeTag == 'popular' ? ("text-[#0D28AB] border border-[#0D28AB]") : ("text-[#222222]")} px-4 py-2 cursor-pointer rounded-full`} id='popular' onClick={activeHandler}>Popular</li>
                <li className={`${activeTag == 'investment' ? ("text-[#0D28AB] border border-[#0D28AB]") : ("text-[#222222]")} px-4 py-2 cursor-pointer rounded-full `} id='investment' onClick={activeHandler}>Investment Hotspots</li>
                <li className={`${activeTag == 'affordable' ? ("text-[#0D28AB] border border-[#0D28AB]") : ("text-[#222222]")} px-4 py-2 cursor-pointer rounded-full `} id='affordable' onClick={activeHandler}>Affordable</li>
                <li className={`${activeTag == 'lifestyle' ? ("text-[#0D28AB] border border-[#0D28AB]") : ("text-[#222222]")} px-4 py-2 cursor-pointer rounded-full `} id='lifestyle' onClick={activeHandler}>Great Lifestyle</li>

            </ul>
        </div>
    )
}

export default ThirdNavigation