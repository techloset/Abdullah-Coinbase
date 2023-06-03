import React from "react";
import logo from "../assets/footer/Logo.svg";
import Gogl from "../assets/footer/Google+.svg";
import Fcbk from "../assets/footer/Facebook.svg";
import Twtr from "../assets/footer/Twitter.svg";
import Insta from "../assets/footer/Instagram.svg";
import Plus from "../assets/footer/Shape.svg";
export default function Footer() {
  return (
   <div className="bg-black  md:h-[361px]">
    <div className="md:flex md:flex-row grow md:justify-around md: items-center">
      <div className=" md:mt-12 mt-2 md:w-[350px] w-[900px] h-[250px] md:ml-0 ml-[280px]">
        <img className="md:ml-0 ml-[370px] md:w-[112px] md:h-[22px] w-[150px] h-[30px]" src={logo} alt="" />
        <div className="md:mt-[36px] mt-8 md:p-0 py-5 px-20">
          <span className="font-popins md:text-sm text-2xl  leading-6 font-normal text-[#A2A2A2]">
            Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu
            rhoncus augue. Fusce vel metus pharetra, fermentum
          </span>
        </div>
        <div className="flex md:mt-[20px] mt-[40px] md:ml-0 ml-[390px] gap-5">
          <img src={Gogl} alt="" />
          <img src={Fcbk} alt="" />
          <img src={Twtr} alt="" />
          <img src={Insta} alt="" />
        </div>
      </div>
      <div className="flex md:mt-12 mt-2">
      <div className="w-[300px] h-[250px]  md:ml-0 ml-[400px] font-popins text-[18px] leading-9 font-normal">
      <h1 className=" font-normal text-white">CoinBase Links </h1>
        <ul className=" text-[#A2A2A2] mt-5">
          <li>Home</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Sell</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className=" w-[300px] h-[250px]  md:ml-3 ml-[130px] font-normal">
      <h1 className="font-normal font-popins text-[18px] leading-9 text-white">Contact Us</h1>
        <div className="mt-5 text-[#A2A2A2]">
          <span>(+234) 137632128</span>
          <span>coinbase@yahoo.com</span>
          <span>Address goes here</span>
        </div>
        <div className="font-popins  text-[12px] text-[#A2A2A2] leading-6 font-normal not-italic w-[113px] h-[24px] mt-[40px]">
          Download Our App
        </div>
      </div>
      </div>
      <div className="md:mt-12 mt-2 md:w-[300px] w-[900px] h-[250px] md:ml-0 ml-[280px]">
      <div className="font-popins  text-[18px] text-white leading-6 font-normal not-italic md:ml-0 ml-[360px]">
          CoinBase Instagram
        </div>
        <div className="flex md:ml-0 ml-60">
          <div className="bg-[#C4C4C4] md:w-[70px] w-[100px] md:h-[70px] h-[100px] md:mt-[31px] mt-3"></div>
          <div className="bg-[#C4C4C4]  md:w-[70px] w-[100px] md:h-[70px] h-[100px] md:mt-[31px] mt-3 ml-[10px]">
            <img className="md:mt-[23px] md:ml-[24px] mt-[35px] ml-[35px]" src={Plus} alt="" />
          </div>
          <div className="bg-[#C4C4C4]  md:w-[70px] w-[100px] md:h-[70px] h-[100px] md:mt-[31px] mt-3 ml-[10px]"></div>
          <div className="bg-[#C4C4C4]  md:w-[70px] w-[100px] md:h-[70px] h-[100px] md:mt-[31px] mt-3 ml-[10px]"></div>
        </div>
        <div className="flex md:ml-0 ml-60">
          <div className="bg-[#C4C4C4]  md:w-[70px] w-[100px] md:h-[70px] h-[100px] mt-[10px]"></div>
          <div className="bg-[#C4C4C4]  md:w-[70px] w-[100px] md:h-[70px] h-[100px] mt-[10px] ml-[10px]"></div>
          <div className="bg-[#C4C4C4]  md:w-[70px] w-[100px] md:h-[70px] h-[100px] mt-[10px] ml-[10px]"></div>
          <div className="bg-[#C4C4C4]  md:w-[70px] w-[100px] md:h-[70px] h-[100px] mt-[10px] ml-[10px]"></div>
        </div>
      </div>
    </div>
    <div className="md:mt-4 mt-3 md:ml-8 ml-[600px]">
          <span className="font-popins  text-[#989898]">
            © 2019 Designed by Cr8tiv_yemmy
          </span>
        </div>
    </div>
  );
}
