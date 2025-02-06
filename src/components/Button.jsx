import React from 'react'
const Button = ({text}) => {
  return (
    <div className='bg-blue-500 text-white px-5 py-2 rounded-full flex items-center justify-center gap-2'>
        <div className="flex items-center justify-center mainli flex-col relative overflow-hidden    ">
            <li className="cursor-pointer transition-all duration-500 ease-in-out  a1    w-full  overflow-hidden  ">
              {text}
            </li>
            <li className="cursor-pointer a2  ">{text}</li>
          </div>
    </div>
  )
}

export default Button