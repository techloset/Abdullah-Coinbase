import React from 'react'

export default function Simplebtn(props) {
  return (
    <button className='font-poppins sm:text-sm text-3xl leading-5 text-center font-bold text-white sm:w-[157px] w-[300px] sm:h-[54px] h-[100px] bg-gradient-to-b  from-[#FD749B]  to-[#281AC8]  rounded-full '>{props.text}</button>
  )
}
