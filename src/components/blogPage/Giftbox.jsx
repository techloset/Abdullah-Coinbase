import React from "react";
import IMG1 from "../../assets/Blogasts/img1.png";
import Sline from "../../assets/Blogasts/Rectangle.png";
import Simplebtn from '../Button';
export default function Gift() {
  return (
    <div className="w-[1170px] h-[870px] border-2 rounded-3xl border-fuchsia-800 bg-white ml-[140px]">
      <div className="ml-[-2px] w-[1180px]">
        <img src={IMG1} alt="" />
      </div>

      <div className=" font-popins bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent sm:text-[32px] text-4xl leading-[45px] font-bold mt-[50px] ml-[200px]">
        HOW TO SELL YOUR ITUNES GIFTCARD WITH US .
      </div>
      <div className="flex justify-center mt-5">
        <span className="text-[10px] leading-[20px] font-normal " >19 JUNE, 2019</span>
        <img className="mx-2" src={Sline} alt="" />
        <span className="text-[10px] leading-[17px] font-normal " >BUSINESS</span>
      </div>
      <div className="mt-8 px-[200px] text-[16px] leading-[28px] font-normal">Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum voluptaria in. Ad mei modus quodsi <span className="ml-[165px]">complectitur, postea verterem persecuti cu est, sea epicuri.</span></div>
      <div className="sm:mt-8 mt-5 sm:ml-[510px] ml-[430px]">
            <Simplebtn text="DISCOVER" />
          </div>
    </div>
  );
}
