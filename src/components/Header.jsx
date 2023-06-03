import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import logors from "../assets/Logors.svg";
import logo1 from "../assets/Dropdown Button.svg";
import { BiUpArrow } from "react-icons/bi";
import { AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import Simplebtn from "./Button";
export default function Header() {
  const [toggle, setToggle]= useState(false);
  const [open, setOpen]= useState(false);
  const [active, setactive]= useState(0)
  const pgetoggle=(index)=>{
setactive(index)
  }
  return (
    <header className="flex bg-white md:h-[134px] h-[200px]">
      <div className="md:block hidden mt-[52.99px] ml-[80px]">
        <img src={logo} alt="noimage" />
      </div>
      <div className={`md:bg-white bg-black md:text-black text-white md:duration-0 duration-500 md:flex md:relative fixed md:mt-0 mt-[200px] w-full h-full md:right-0 ${ toggle? "right-[0px]" : "right-[-100%]"}`}>
        <ul className="md:p-0 p-10 flex md:flex-row flex-col md:gap-[71px] md:ml-[250px] md:mt-[57px] font-popins  md:text-sm text-2xl text-center font-bold">
          <li className={`md:p-0 p-10 h-7 ${active === 0 ?'md:border-b-4 border-pink-500 font-normal':'' }`} onClick={()=>pgetoggle(0)}><Link to='/'>Home</Link></li>
          <li className={`md:p-0 p-10 h-7 ${active === 1 ?'md:border-b-4 border-pink-500 font-normal':'' }`} onClick={()=>pgetoggle(1)}><Link to='about'>About Us</Link></li>
          <li className={`md:p-0 p-10 h-7 ${active === 2 ?'md:border-b-4 border-pink-500 font-normal':'' }`} onClick={()=>pgetoggle(2)}><Link to='blog'>Blog</Link></li>
          <li className={`md:p-0 p-10 h-7 ${active === 3 ?'md:border-b-4 border-pink-500 font-normal':'' }`} onClick={()=>pgetoggle(3)}><Link to='contact'>Contact Us</Link></li>
        </ul>
        <div className="md:ml-[114px] ml-[600px] md:mt-0 mt-3">
        <div onClick={()=>setOpen(!open)} className="flex md:mt-[58px] h-[20px] font-popins  md:text-sm text-2xl leading-5 text-center font-bold">
            Sell Bitcoin/ Giftcard
            <img
              className="w-[8px] h-[6px] ml-[4px] mt-[9px]"
              src={logo1}
              alt=""
            />
          </div>
          <div className={`md:mt-[12px] md:ml-[143px] ml-[230px] ${open ? 'block' : 'hidden'}`}>
              <BiUpArrow />
              <div className="absolute rounded-sm border w-[142px] h-[57px]">
              <div className="rounded-sm h-[57px] bg-white text-black">
                <span className="mt-[8px ml-[12px] font-popins  text-[12px] leading-[18px] not-italic font-normal">
                  Sell Bitcoin
                </span>
                <div className=" h-[29px] w-[140px] mt-[3px] rounded-sm bg-gradient-to-b from-[#FD749B] to-[#281AC8]">
                  <span className="mt-[5px] ml-[11px] font-poppins text-[12px] leading-[18px] not-italic font-normal">
                    Sell Giftcard
                  </span>
                </div>
              </div>
            </div>
            </div>
        </div>
        <div className="md:mt-[37px] mt-20 md:ml-[1000px] sm:ml-[640px] ml-[560px] absolute">
          <Simplebtn text="LOGIN" />
        </div>
      </div>
      {/* Responsive div */}
      <div className="md:hidden block">
        <img className="ml-[100px] mt-[70px]" src={logors} alt="" />
      </div>
      {
        toggle ?
        <AiOutlineClose onClick={()=>setToggle(!toggle)} className="md:hidden mt-[80px] text-5xl ml-[1000px]" />
        :
        <AiOutlineMenu onClick={()=>setToggle(!toggle)} className="md:hidden mt-[80px] text-5xl ml-[1000px]" />
      }
    </header>
  );
}
