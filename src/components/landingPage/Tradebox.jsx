import React from 'react'
import Blogoo from "../../assets/BVector.png";
import Gftcrd from "../../assets/Gift cards.png";
import Line from "../../assets/Line.svg";
import Pth2 from "../../assets/Path 4.1 (1).png";
export default function Trade() {
  return (
    <div>
    <div className="flex sm:h-[488px] h-[650px] sm:mt-5 mt-36 bg-gradient-to-b from-[#FD749B]  to-[#281AC8] ">
        <div className="sm:w-[980px] w-[600px] sm:h-[504px] h-[850px] bg-white absolute sm:ml-[225px] ml-[400px] mt-[121px] rounded-3xl border borde border-fuchsia-800">
          <span className="sm:w-[318px] h-[42px] sm:ml-[341px] ml-[60px] mt-[74px] absolute font-popins bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent sm:text-[28px] text-5xl leading-[42px] font-bold">
            Trade from anywhere
          </span>
          <img className="sm:w-[50px] w-[100px] mt-[133px] sm:ml-[450px] ml-[250px]" src={Line} alt="" />
          <div className="flex sm:flex-row flex-col">
            <div className="bg-slate-100 border-2 border-fuchsia-800 rounded-3xl sm:w-[262px] w-[275px] sm:h-[226px] h-[275px] sm:ml-[186px] ml-[165px] mt-[60px]"
            >
              <div className="flex ml-[100px] mt-[41px] w-[58px] h-[58px] bg-[url('./assets/Vector.png')]">
                <img
                  className="ml-[18px] w-[24px] h-[33px] mt-[12px]"
                  src={Blogoo}
                  alt=""
                />
              </div>
              <span className="sm:mt-[50px] mt-[60px] sm:ml-[102px] ml-[85px] absolute sm:text-[16px] text-3xl leading-[24px] font-bold">
                Bitcoin
              </span>
            </div>
            <div className="bg-slate-100 border-2 border-fuchsia-800 rounded-3xl sm:w-[262px] w-[275px] sm:h-[226px] h-[275px] sm:ml-[63px] ml-[165px] mt-[60px]">
              <img className="ml-[100px] mt-[55px]" src={Gftcrd} alt="" />
              <span className="sm:mt-[55px] mt-[75px] sm:ml-[98px] ml-[65px] absolute sm:text-[16px] text-3xl leading-[24px] font-bold">
                Gift Cards
              </span>
            </div>
          </div>
        </div>
        <div className="self-end">
          <img src={Pth2} alt="" />
        </div>
      </div>
      </div>
  )
}
