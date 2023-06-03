import React from "react";
import Line1 from "../../assets/Boxasts/Line 25.png";
import Blogo from "../../assets/Boxasts/Blogo.png";
import Elogo from "../../assets/Boxasts/Elogo.png";
import Bank from "../../assets/Boxasts/bank.png";
import Arow from "../../assets/Boxasts/Transfer.png";
import Darow from "../../assets/Boxasts/Double transfer.png";
import Vline from "../../assets/Boxasts/VLine.png";
import Scroll from "../../assets/Boxasts/Scroll.png";

export default function Box1() {
  return (
    <div>
      <div className="sm:w-[1158px] w-[500px] sm:h-[367px] h-[1000px] bg-white sm:ml-[171px] ml-[475px] mt-[39px] rounded-3xl">
        <div className="w-[1158px] h-[71px] rounded-t-3xl sm:flex hidden justify-around gap-20 items-center">
          <span className="font-popins  not-italic text-[18px] leading-[65px] font-bold bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent">
            OUR RATES
          </span>
          <span className="font-popins  not-italic text-[18px] leading-[65px] font-bold  bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent">
            OUR RESERVES
          </span>
          <span className="font-popins  not-italic text-[18px] leading-[65px] font-bold  bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent">
            LATEST EXCHANGES
          </span>
        </div>
        <img className="sm:block hidden" src={Line1} alt="" />
        <div className="sm:block hidden mt-[18px] ml-[920px]">
          <button className="w-[85.67px] h-[24.2px] bg-gradient-to-b  from-[#FD749B]  to-[#281AC8] rounded-[5px] font-poppins text-[8px] leading-[25px] text-center font-bold text-white ">
            8 hours ago
          </button>
        </div>
        <div className="sm:flex">
          <div className="w-72 h-60 sm:ml-16 ml-20 mt-2">
          <span className="sm:hidden block font-popins  not-italic text-3xl leading-[65px] font-bold bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent ml-[80px]">
            OUR RATES
            </span>
            <img className="sm:hidden block mt-1 ml-4 w-80" src={Vline} alt="" />
            <div className="flex sm:mt-0 mt-5 w-[27px] h-[28px] bg-[url('./assets/Boxasts/Bring.png')]">
              <img
                className="ml-[7.5px] w-3 h-4 mt-[5.5px]"
                src={Blogo}
                alt=""
              />
              <span className="sm:ml-[16px] ml-[25px] font-popins  not-italic sm:text-[14px] text-xl sm:font-normal font-bold ">
                BTC
              </span>
              <span className="sm:ml-[16px] ml-[80px] w-[200px] font-popins  not-italic sm:text-[14px] text-lg font-normal">
                WeBuy@₦350/$
              </span>
            </div>
            <div className="mt-[20px] sm:ml-[80px] ml-[165px] font-popins  not-italic sm:text-[14px] text-lg font-normal">
              WeSell@₦370/$
            </div>
            <div className="flex sm:mt-[50px] mt-[30px]">
              <img className="ml-[5px]" src={Elogo} alt="" />
              <span className="sm:ml-[14px] ml-[23px] font-popins  not-italic sm:text-[14px] text-xl sm:font-normal font-bold ">
                ETH
              </span>
              <span className="sm:ml-[16px] ml-[80px] w-[200px] font-popins  not-italic sm:text-[14px] text-lg font-normal">
                WeBuy@₦345/$
              </span>
            </div>
            <div className="mt-[20px] sm:ml-[80px] ml-[165px] font-popins  not-italic sm:text-[14px] text-lg font-normal">
              WeSell@₦370/$
            </div>
            <img className="sm:hidden block mt-1 ml-4 w-80" src={Vline} alt="" />
          </div>
          <div className=" w-72 h-60 ml-20 sm:mt-2 mt-16">
          <span className="sm:hidden block font-popins  not-italic text-3xl leading-[65px] font-bold bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent ml-[65px]">
            OUR RESERVES
            </span>
            <img className="sm:hidden block mt-1 ml-4 w-80" src={Vline} alt="" />
            <div className="flex sm:mt-0 mt-4">
              <img src={Bank} alt="" />
              <span className="ml-[13px] font-popins  not-italic text-[14px] font-normal">
                Bank Transfer
              </span>
              <span className="ml-[125px] font-popins  not-italic text-[14px] sm:font-normal font-bold">
                NGN
              </span>
            </div>
            <div className="mt-[20px] ml-[120px] font-popins  not-italic text-[14px] sm:font-normal font-bold">
              #3452030300303.24/$
            </div>
            <div className="flex mt-[50px]">
              <div className="flex w-[27px] h-[28px] bg-[url('./assets/Boxasts/Bring.png')]">
                <img
                  className="ml-[7.5px] w-3 h-4 mt-[5.5px]"
                  src={Blogo}
                  alt=""
                />
                <span className="ml-[22px] font-popins  not-italic sm:text-[14px] text-lg sm:font-normal font-bold">
                  Bitcoin
                </span>
                <span className="ml-[120px] font-popins  not-italic text-[14px] sm:font-normal font-bold">
                  399.98BTC
                </span>
              </div>
            </div>
            <div className="flex mt-[50px]">
              <div className="flex">
                <img className="ml-[5px]" src={Elogo} alt="" />
                <span className="ml-[18px] font-popins  not-italic sm:text-[14px] text-lg sm:font-normal font-bold ">
                  Ethereum
                </span>
                <span className="ml-[90px] font-popins  not-italic text-[14px] sm:font-normal font-bold">
                  1000.00ETH
                </span>
              </div>
            </div>
            <img className="sm:hidden block mt-1 ml-4 w-80" src={Vline} alt="" />
          </div>
          <div className="w-60 h-60 ml-28 sm:mt-2 mt-24">
          <span className="sm:hidden block font-popins  not-italic text-2xl leading-[65px] font-bold bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent">
            LATEST EXCHANGES
            </span>
            <img className="sm:hidden block mt- ml-4 w-80" src={Vline} alt="" />
            <div className="sm:hidden block sm:mt-[18px] mt-2 sm:ml-[920px] ml-[80px]">
          <button className="w-[85.67px] h-[24.2px] bg-gradient-to-b  from-[#FD749B]  to-[#281AC8] rounded-[5px] font-poppins text-[8px] leading-[25px] text-center font-bold text-white ">
            8 hours ago
          </button>
        </div>
            <div className="font-popinssm:mt-0 mt-2  not-italic text-[14px] sm:font-normal font-bold leading-6">
              Bitcoin BTC
              <img className="mx-1 inline-block" src={Arow} alt="" />
              Bank <br />
              Transfer NGN
            </div>
            <div className=" mt-[50px] font-popins  not-italic text-[12px] sm:font-normal font-bold">
              1.16 BTC <img className=" mx-3 inline-block" src={Darow} alt="" />
              696152299929.23 NGN
            </div>
            <img className="mt-[30px]" src={Vline} alt="" />
            <div className=" mt-[25px] font-popins  not-italic text-[14px] sm:font-normal font-bold leading-6">
              Amazon Card{" "}
              <img className="mx-1 inline-block" src={Arow} alt="" />
              Bank <br />
              Transfer NGN
            </div>
          </div>
          <img className="sm:block hidden ml-[60px]" src={Scroll} alt="" />
        </div>
      </div>
    </div>
  );
}
