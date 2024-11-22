import React, { useState } from 'react'

function Navigation() {
    const [activeTag,setActiveTag] = useState('goa')
    function activeHandler(e){
        setActiveTag(e.target.id)
    }
  return (
    <div className='flex items-center justify-center'>
        <ul className='text-base font-semibold capitalize overflow-x-scroll flex gap-3'>
            <li className={`${activeTag=='goa'? ("text-[#0D28AB] border border-[#0D28AB]"):("text-[#222222]")} px-4 py-2 cursor-pointer rounded-full`} id='goa' onClick={activeHandler}>Goa</li>
            <li className={`${activeTag=='mumbai'? ("text-[#0D28AB] border border-[#0D28AB]"):("text-[#222222]")} px-4 py-2 cursor-pointer rounded-full `} id='mumbai' onClick={activeHandler}>Mumbai</li>
            <li className={`${activeTag=='kolkata'? ("text-[#0D28AB] border border-[#0D28AB]"):("text-[#222222]")} px-4 py-2 cursor-pointer rounded-full `} id='kolkata' onClick={activeHandler}>kolkata</li>
            <li className={`${activeTag=='jaipur'? ("text-[#0D28AB] border border-[#0D28AB]"):("text-[#222222]")} px-4 py-2 cursor-pointer rounded-full`} id='jaipur' onClick={activeHandler}>jaipur</li>
            <li className={`${activeTag=='bangalore'? ("text-[#0D28AB] border border-[#0D28AB]"):("text-[#222222]")} px-4 py-2 cursor-pointer rounded-full `} id='bangalore' onClick={activeHandler}>bangalore</li>
            <li className={`${activeTag=='kerala'? ("text-[#0D28AB] border border-[#0D28AB]"):("text-[#222222]")} px-4 py-2 cursor-pointer rounded-full `} id='kerala' onClick={activeHandler}>kerala</li>
            <li className={`${activeTag=='pune'? ("text-[#0D28AB] border border-[#0D28AB]"):("text-[#222222]")} p-2 px-4 py-2 cursor-pointer rounded-full`} id='pune' onClick={activeHandler}>pune</li>
        </ul>
    </div>
  )
}

export default Navigation