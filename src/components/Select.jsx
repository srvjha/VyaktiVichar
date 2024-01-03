import React, { useId } from 'react'

function Select(
    {
    label,
    options,
    classname='',
    ...props
},ref) 
{
    const id  = useId()
  return (
   
    <div className='w-full'>
        {label && <label htmlFor={id}></label>}
        <select
         {...props}
          id={id}
         ref={ref}
         className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 
         duration-200 border border-gray-200 w-full ${classname}`}
         >
            // ab options daalenge aur options array ke form me hi aata hai toh loop laga lenge
            {options?.map((option)=>(
             <option key={option} value={option}>
              {option}
             </option>
            ))}
         </select>
    </div>
  )
}

export default React.forwardRef(Select)