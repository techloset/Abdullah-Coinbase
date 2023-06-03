import React from "react";
import IMG from "../../assets/Blogasts/IMG.png";
import PTH from "../../assets/Aboutasts/Path 4.png";
import Gift from "../blogPage/Giftbox";
import Chrismis from "../blogPage/Chrismisbox";
import Exchange from "../blogPage/Exchangebox";
import Pages from "../blogPage/Pagesbtn";


export default function Blog() {
  return (
    <>
      <div className="sm:h-[700px] h-[1350px] bg-gradient-to-b from-[#FD749B]  to-[#281AC8]">
        <div className="flex sm:flex-row flex-col-reverse justify-around">
          <div className="sm:mt-[150px] mt-[100px]  sm:ml-0 ml-[250px]">
            <span className="not-italic sm:text-[12px] text-2xl leading-[18px] font-normal text-white">
              HOME/BLOG
            </span>

            <div className="mt-5 not-italic sm:text-[40px] text-7xl sm:leading-[60px] leading-[100px] font-normal text-white">
              Stay updated,
              <br />
              Never miss a post.
            </div>
            <div className="mt-5 not-italic sm:text-[18px] text-5xl sm:leading-[27px] leading-[60px] font-normal text-white">
              Get to know the latest stuff about our services
              <br /> via our blog post.
            </div>
          </div>

          <div className="sm:mt-2 mt-20 sm:ml-[50px] ml-[400px] ">
            <img src={IMG} alt="" />
          </div>
        </div>
        <img className="sm:mt-0 mt-16" src={PTH} alt="" />
      </div>
      <Gift />
      <Chrismis />
      <Exchange />
      <Pages />
    </>
  );
}
