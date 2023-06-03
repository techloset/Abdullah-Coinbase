import React from 'react'
import Line from "../../assets/Line.svg";
export default function Team() {
  return (
    <div>
        <div className="sm:ml-[620px] ml-[560px] sm:mt-24 mt-40 font-popins bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent sm:text-[28px] text-5xl leading-[65px] font-bold">
        Meet the team
      </div>
      <img
        className="sm:ml-[690px] ml-[655px] sm:mt-0 mt-5 sm:w-[50px] w-[120px]"
        src={Line}
        alt=""
      />
      <div className='sm:mt-5 mt-10 sm:text-[16px] text-2xl leading-[40px] font-normal sm:pl-[520px] sm:pr-[480px] pl-[430px]  pr-[400px]'>
      Meet the team that  makes the process of this system fast and painless as possible to provide you with good result 
      </div>
      {/* Slides div */}
      <div className='flex justify-center'>
<div className='bg-[#C4C4C4] rounded-xl w-[300px] h-[185px] mt-[110px]'></div>
<div className='bg-[#C4C4C4] relative ml-[-130px] rounded-xl w-[300px] h-[230px] mt-[85px]'></div>
<div className='flex items-end bg-gradient-to-b from-[#ed9eb5] to-[#7e78bd] relative ml-[-50px] rounded-xl w-[300px] h-[285px] mt-[60px]'>
<div className='text-white ml-5 mb-5'>CEO <br/>
Amanda Roth </div>
</div>
<div className='bg-[#C4C4C4] rounded-xl ml-[-50px] w-[300px] h-[230px] mt-[85px]'></div>
<div className='bg-[#C4C4C4] rounded-xl w-[300px] h-[185px] ml-[-130px] mt-[110px]'></div>
      </div>
    </div>
  )
}
