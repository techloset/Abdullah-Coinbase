import React from "react";
import Pth1 from "../../assets/Path 4.1.png";
import Line from "../../assets/Line.svg";
import Happy from "../../assets/Happy Customers.png"
import Pth2 from "../../assets/Path 4.1 (1).png";
export default function Clients() {
  return (
    <div>
      <div className="sm:h-[1300px] h-[1500px] sm:mt-1 mt-5 bg-gradient-to-b from-[#FD749B]  to-[#281AC8]">
        <img src={Pth1} alt="" />
        <div className="sm:pl-[550px] sm:pr-[430px] pl-[470px] pr-[300px] sm:pt-[100px] pt-[150px] text-white sm:text-[28px] text-5xl sm:leading-[42px] leading-[60px] font-bold not-italic">
          10,000 Satisfied clients <br/> <span className="sm:ml-[45px] ml-14">around the world </span>
          <img
            className="sm:mt-[30px] mt-[50px] sm:w-[50px] w-[200px] sm:ml-[120px] ml-[155px]"
            src={Line}
            alt=""
          />
        </div>
        <div className="sm:pl-[470px] sm:pr-[420px] pl-[70px] pr-[30px] sm:pt-[100px] pt-[150px] text-white sm:text-[16px] text-4xl sm:leading-[40px] leading-[60px] font-normal not-italic">
        Yeah! we’re proud with numbers. We’ve helped thousands of clients all around the world with our bespoke service. Hover ontop of them pic to <span className="sm:ml-[170px]">view their testimonials.</span> 
        </div>
        <img className="sm:ml-[200px] ml-[170px] sm:mt-5 mt-10" src={Happy} alt="" />
        <img className="sm:mt-20 mt-[50px]" src={Pth2} alt="" />
      </div>
    </div>
  );
}
