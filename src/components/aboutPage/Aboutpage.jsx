import React from "react";
import IMG from "../../assets/Aboutasts/IMG.png";
import PTH from '../../assets/Aboutasts/Path 4.png'
import Line from '../../assets/Line.svg'
import AboutBox from "../aboutPage/Aboutbox";
import History from "../aboutPage/Historybox";
import Team from "../aboutPage/Teamslides";
import Simplebtn from "../Button";
export default function About() {
  return (
    <>
    <div className="sm:h-[700px] h-[1200px] bg-gradient-to-b from-[#FD749B]  to-[#281AC8]">
      <div className="flex sm:flex-row flex-col-reverse justify-around">
        <div className="sm:mt-[150px] mt-[100px]  sm:ml-0 ml-[250px]">
          <span className="not-italic sm:text-[12px] text-2xl leading-[18px] font-normal text-white">
            HOME/ABOUT US
          </span>

          <div className="mt-5 not-italic sm:text-[40px] text-7xl sm:leading-[60px] leading-[100px] font-normal text-white">
            Great service,
            <br />
          Professional support
          </div>
          <div className="mt-5 not-italic sm:text-[18px] text-5xl sm:leading-[27px] leading-[60px] font-normal text-white">
            CoinBase is a platform for trading your bitcoin and <br/> giftcard at the
            best rate, why not give us a trial.
          </div>
        </div>

        <div className="mt-[100px] sm:ml-[73px] ml-[400px]">
          <img src={IMG} alt="" />
        </div>
      </div>
      <img className="mt-10" src={PTH} alt="" />
    </div>
    <div className="md:relative md:mt-[-30px] mt-[60px] md:px-[450px] px-[100px] font-popins bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent md:text-[18px] text-5xl md:leading-[40px] leading-[80px] font-bold">
    “Morbi sagittis ultricies ex, a tempus lorem suscipit non. Donec semper leo ut lobortis condimentum. Orci varius <span className="md:ml-28 ml-56">natoque penatibus et magnis”</span> 
            </div>
            <div>
            <img
              className="sm:ml-[650px] ml-[620px] sm:mt-5 mt-20 sm:w-[50px] w-[120px]"
              src={Line}
              alt=""
            />
            </div>
            <h1 className="sm:mt-5 mt-10 sm:ml-[580px] ml-[500px] sm:text-[14px] text-2xl sm:leading-[25px] leading-[40px] font-normal">Ramon Ridwan • CEO CoinBase</h1>
            <AboutBox />
            <History />
            <Team />
            <div className="sm:mt-[100px] mt-[150px] sm:ml-[550px] ml-[280px]">
        <span className="font-popins bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent sm:text-[28px] text-7xl leading-[65px] font-bold not-italic sm:ml-0 ml-12">
          Subscribe our newsletter
        </span>
        <img
          className="sm:mt-[18px] mt-[50px] sm:w-[50px] w-[150px] sm:ml-32 ml-[380px]"
          src={Line}
          alt=""
        />
      </div>
      <div className=" relative  sm:pl-[550px] sm:pr-[500px] pl-[380px] pr-[230px] sm:mt-10 mt-20 text-black sm:text-[16px] text-4xl sm:leading-[40px] leading-[100px] font-normal not-italic">
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
    </>
  );
}
