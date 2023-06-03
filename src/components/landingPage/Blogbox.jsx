import React from "react";
import Line from "../../assets/Line.svg";
import Rctngl from "../../assets/blog/Rectangle.png";
export default function Blog() {
  return (
    <div>
      <div className=" sm:ml-[640px] ml-[430px] sm:mt-64 mt-[500px]">
        <span className="font-popins bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent sm:text-4xl text-7xl leading-[42px] font-bold not-italic sm:ml-0 ml-36">
          Our Blog
        </span>
        <img
          className="sm:mt-[18px] mt-[50px] sm:w-[50px] w-[150px] sm:ml-11 ml-[210px]"
          src={Line}
          alt=""
        />
      </div>
      <div className="font-popins  sm:text-[20px] text-4xl leading-[40px] font-normal not-italic sm:ml-[520px] ml-[370px] sm:mt-10 mt-24">
        Get to know the latest stuff via our blog post.
      </div>
      <div className="flex sm:flex-row flex-col sm:ml-0 ml-[50px]">
        {/* first */}
        <div className="w-[370px] sm:h-[286px] h-[350px] rounded-2xl border-2 border-[#888888] bg-white mt-[86px] sm:ml-[180px] ml-[485px]">
          <div className="flex">
            <span className="text-[#888888] mt-[30px] ml-[50px] font-popins  text-[12px]  leading-[20px] font-normal not-italic">
              01 FEB, 2019
            </span>
            <img className="ml-[13px] mt-[30px]" src={Rctngl} alt="" />
            <span className="text-[#888888] mt-[30px] ml-[10px] font-popins  text-[12px]  leading-[20px] font-normal not-italic">
              TECHNOLOGY
            </span>
          </div>
          <div className="text-[#888888] w-[270px] h-[60px] ml-[55px] mt-[18px] font-popins  text-[20px]  leading-[30px] font-bold not-italic">
            HOW TO SELL YOUR ITUNES GIFTCARD WITH US .
          </div>
          <div className="text-[#888888] w-[270px] h-[60px] ml-[55px] mt-[18px] font-popins  text-[10px]  leading-[18px] font-normal not-italic">
            Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
            voluptaria in. Ad mei modus quodsi complectitur, postea...
          </div>
          <button className="w-[105px] h-[36px] bg-[#888888] rounded-full ml-[55px] mt-2 font-popins  text-[9px] text-white  leading-[13px] font-bold not-italic">
            READ MORE
          </button>
        </div>
        {/* second */}
        <div className="w-[465px] sm:h-[358px] h-[400px] rounded-2xl border-2 border-fuchsia-800  bg-white sm:mt-[50px] mt-[-50px] sm:ml-[-55px] ml-[440px] relative">
          <div className="flex">
            <span className="text-[#333333] mt-[30px] ml-[50px] font-popins  text-[12px]  leading-[20px] font-normal not-italic">
              19 JUNE, 2019
            </span>
            <img className="ml-[13px] mt-[30px]" src={Rctngl} alt="" />
            <span className="text-[#333333]  mt-[30px] ml-[10px] font-popins  text-[12px]  leading-[20px] font-normal not-italic">
              BUSINESS
            </span>
          </div>
          <div className="bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent w-[308px] h-[78px] ml-[55px] mt-[18px] font-popins  text-[24px]  leading-[39px] font-bold not-italic">
            ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER...
          </div>
          <div className="text-[#333333]  w-[270px] h-[60px] ml-[55px] mt-[18px] font-popins  text-[12px]  leading-[28px] font-normal not-italic">
            Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
            voluptaria in. Ad mei modus quodsi complectitur, postea...
          </div>
          <button className="w-[127px] h-[43px] bg-gradient-to-b from-[#FD749B]  to-[#281AC8] rounded-full ml-[55px] mt-[50px] font-popins  text-[9px] text-white  leading-[13px] font-bold not-italic">
            READ MORE
          </button>
        </div>
        {/* third */}
        <div className="w-[370px] sm:h-[286px] h-[350px] rounded-2xl border-2 border-[#888888]  bg-white sm:mt-[86px] mt-[-50px] sm:ml-[-75px] ml-[485px]">
          <div className="flex">
            <span className="text-[#888888] mt-[30px] ml-[50px] font-popins  text-[12px]  leading-[20px] font-normal not-italic">
              01 DEC, 2019
            </span>
            <img className="ml-[13px] mt-[30px]" src={Rctngl} alt="" />
            <span className="text-[#888888] mt-[30px] ml-[10px] font-popins  text-[12px]  leading-[20px] font-normal not-italic">
              LIFESTYLE
            </span>
          </div>
          <div className="text-[#888888] w-[270px] h-[60px] ml-[55px] mt-[18px] font-popins  text-[20px]  leading-[30px] font-bold not-italic">
            EXCHANGE 5 PRODUCTS & GET 1 FREE PRODUCT.
          </div>
          <div className="text-[#888888] w-[270px] h-[60px] ml-[55px] mt-[18px] font-popins  text-[10px]  leading-[18px] font-normal not-italic">
            Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
            voluptaria in. Ad mei modus quodsi complectitur, postea...
          </div>
          <button className="w-[105px] h-[36px] bg-[#888888] rounded-full ml-[55px] mt-2 font-popins  text-[9px] text-white  leading-[13px] font-bold not-italic">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
