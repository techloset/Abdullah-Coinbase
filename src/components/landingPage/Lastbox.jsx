import React from "react";
import Line from "../../assets/Line.svg";
import IOS from "../../assets/last/Ios.png";
import Android from "../../assets/last/googl.png";
import Pth1 from "../../assets/Path 4.1.png";
import X1 from "../../assets/last/X-1.png";
import X2 from "../../assets/last/X-2.png";
import Simplebtn from "../Button";
export default function Last() {
  return (
    <div>
      <div className=" sm:ml-[580px] ml-[280px]">
        <span className="font-popins bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent sm:text-[28px] text-7xl leading-[65px] font-bold not-italic sm:ml-0 ml-28">
          Download our app
        </span>
        <img
          className="sm:mt-[18px] mt-[50px] sm:w-[50px] w-[150px] sm:ml-24 ml-[350px]"
          src={Line}
          alt=""
        />
      </div>
      <div className=" relative  sm:pl-[550px] sm:pr-[500px] pl-[250px] pr-[230px] sm:pt-[100px] pt-[150px] text-black sm:text-[16px] text-5xl sm:leading-[40px] leading-[100px] font-normal not-italic">
        Discover exclusive deals and discounts with
        <br />{" "}
        <span className="sm:ml-[75px] ml-52">our mobile experience.</span>
      </div>
      <div className="relative flex">
        <img
          className="mt-9 sm:h-[36px] h-[90px] sm:ml-[610px] ml-[450px]"
          src={IOS}
          alt=""
        />
        <img
          className="mt-9 sm:h-[36px] h-[80px] ml-[10px"
          src={Android}
          alt=""
        />
      </div>
      <div className="sm:h-[550px] mt-[-150px] bg-gradient-to-b from-[#FD749B]  to-[#281AC8]">
        <img className="" src={Pth1} alt="" />
        <div className="mt-[30px] flex sm:flex-row flex-col sm:justify-center">
          <img src={X1} alt="" />
          <img className="sm:ml-[20px] sm:mt-0 mt-5" src={X2} alt="" />
        </div>
      </div>
      <div className="mt-[400px] sm:ml-[550px] ml-[280px]">
        <span className="font-popins bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent sm:text-[28px] text-7xl leading-[65px] font-bold not-italic sm:ml-0 ml-12">
          Subscribe our newsletter
        </span>
        <img
          className="sm:mt-[18px] mt-[50px] sm:w-[50px] w-[150px] sm:ml-32 ml-[380px]"
          src={Line}
          alt=""
        />
      </div>
      <div className=" relative  sm:pl-[550px] sm:pr-[500px] pl-[380px] pr-[230px] sm:pt-[100px] pt-[150px] text-black sm:text-[16px] text-4xl sm:leading-[40px] leading-[100px] font-normal not-italic">
        Subscribe to our newsletter for daily/weekly
        <br />{" "}
        <span className="sm:ml-[25px] ml-20">
          update of our products and services.
        </span>
      </div>
      <div className="flex justify-center mt-28">
        <div className="bg-gradient-to-r from-[#FD749B]  to-[#281AC8] sm:w-[380px] w-[500px] sm:h-[55px] h-[100px] rounded-full">
        <input className="m-[1px] sm:w-[378px] w-[495px] h-[52px]  rounded-full sm:p-3 p-12" placeholder="EMAIL" />
        </div>

<div className="ml-5">
            <Simplebtn text="DISCOVER" />
          </div>
      </div>
      
    </div>
  );
}
