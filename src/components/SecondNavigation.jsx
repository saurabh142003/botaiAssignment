import React from 'react'
import { useState } from 'react'
function SecondNavigation() {
    const [activeTag,setActiveTag] = useState('renters')
    function activeHandler(e){
        setActiveTag(e.target.id)
    }
    return (
        <div className='flex items-center justify-center'>
            <ul className='text-base font-semibold capitalize overflow-x-scroll flex gap-3'>
                <li className={`${activeTag == 'renters' ? ("text-[#0D28AB] border border-[#0D28AB]") : ("text-[#222222]")} px-4 py-2 cursor-pointer rounded-full`} id='renters' onClick={activeHandler}>Renters</li>
                <li className={`${activeTag == 'landlord' ? ("text-[#0D28AB] border border-[#0D28AB]") : ("text-[#222222]")} px-4 py-2 cursor-pointer rounded-full `} id='landlord' onClick={activeHandler}>Landlords/Property Managers</li>
                <li className={`${activeTag == 'agents' ? ("text-[#0D28AB] border border-[#0D28AB]") : ("text-[#222222]")} px-4 py-2 cursor-pointer rounded-full `} id='agents' onClick={activeHandler}>Agents</li>
                
            </ul>
        </div>
    )
}

export default SecondNavigation