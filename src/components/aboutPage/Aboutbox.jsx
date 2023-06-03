import React from 'react'
import Pic from "../../assets/Layer 2.svg";
import Line from '../../assets/Line.svg'
import dimnd from '../../assets/Aboutasts/dimnd.png'
import medal from '../../assets/Aboutasts/medal.png'
import review from '../../assets/Aboutasts/customer-review.png'
import support from '../../assets/Aboutasts/support.png'
export default function AboutBox() {
  return (
    <div className='bg-white border-2 border-fuchsia-800 rounded-3xl ml-[210px] mt-[60px] w-[1000px] sm:h-[850px] h-[900px]'>
<div className='mt-5 ml-[190px]'> 
    <img src={Pic} alt="" />
</div>
            <div className="sm:ml-[390px] ml-[300px] mt-10 font-popins bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent sm:text-[28px] text-5xl leading-[65px] font-bold">
            About CoinBase
            </div>
            <img
              className="sm:ml-[470px] ml-[425px] sm:mt-0 mt-5 sm:w-[50px] w-[120px]"
              src={Line}
              alt=""
            />
            <div className='sm:px-[260px] px-[170px] sm:text-[16px] text-3xl leading-[40px] font-normal mt-10'>
            CoinBase is an online site and a p2admin platform that allows users to buy, sell and/ or exchange digital and fiat assets safely. Owned and managed by CoinBase Business Services established <span className='sm:ml-[140px]
            '>and Incoperated in Nigeria.</span> 

            </div>
          <div className='flex justify-center gap-10 mt-10'>
            <img src={dimnd} alt="" />
            <img src={medal} alt="" />
            <img src={review} alt="" />
            <img src={support} alt="" />
          </div>
    </div>
  )
}
