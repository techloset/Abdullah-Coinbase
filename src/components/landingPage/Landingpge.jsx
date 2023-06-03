import React from "react";
import IMG from "../../assets/IMG.svg";
import Pth from "../../assets/Path 4.1 (1).png";
import Pic from "../../assets/Layer 2.svg";
import Line from "../../assets/Line.svg";
import Simplebtn from "../Button";
import Pth1 from "../../assets/Path 4.1.png";
import Pth2 from "../../assets/Path 4.1 (1).png";
import Box1 from "../landingPage/Box";
import IMG2 from "../../assets/Img2.png";
import Trade from "../landingPage/Tradebox";
import Blog from "../landingPage/Blogbox";
import Clients from "../landingPage/Clientsbox";
import Last from "../landingPage/Lastbox"


export default function Landing() {
  return (
    <>
      <div className="sm:h-[700px] h-[1200px] bg-gradient-to-b from-[#FD749B]  to-[#281AC8]">
        <div className="flex sm:flex-row flex-col-reverse">
          <div className=" sm:w-[532px] w-[1000px] sm:ml-[182px] ml-[220px] sm:mt-[142px] mt-10 sm:h-[180px]">
            <span className="font-popins not-italic sm:text-[40px] text-6xl leading-[60px] font-normal text-white">
              We provide easy solution to exchange your
              <b>Bitcoin/ GiftCard for money</b>
            </span>
            <div className="sm:w-[460px] w-[700px sm:mt-[21px] mt-10 sm:h-[54px]">
              <span className=" font-popins  not-italic sm:text-[18px] text-3xl leading-[27px] font-normal text-white">
                CoinBase is a platform for trading your bitcoin and giftcard at
                the best rate, why not give us a trial.
              </span>
            </div>
            <button className="sm:mt-[30px] mt-10 sm:mb-0 mb-10 sm:ml-0 ml-[325px] bg-white font-popins sm:text-sm text-3xl text-center font-bold text-[#FD749B] sm:w-[157px] w-[300px] sm:h-[54px] h-[100px] rounded-full ">
              GET STARTED
            </button>
          </div>
          <div className="mt-[60px] sm:ml-[73px] ml-[400px]">
            <img src={IMG} alt="" />
          </div>
        </div>
        <div>
          <img src={Pth} alt="" />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col mt-12">
        <img className="ml-[136px]" src={Pic} alt="" />
        <div>
          <div className="sm:w-[315px] w-[500px] h-[65px] sm:mt-0 mt-10 sm:ml-[36px] ml-[450px] bg-white">
            <div className=" font-popins bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent sm:text-[28px] text-5xl leading-[65px] font-bold mt-[0px]">
              Welcome to CoinBase
            </div>
            <img
              className="sm:ml-0 ml-[190px] sm:mt-0 mt-5 sm:w-[50px] w-[120px]"
              src={Line}
              alt=""
            />
          </div>
          <div className="bg-white sm:ml-[36px] ml-[65px] sm:w-[542px] w-[1300px] sm:h-[268px] h-[600px] sm:mt-[44px] mt-20">
            <p className="font-popins  not-italic sm:text-[15px] text-5xl sm:leading-[40px] leading-[80px] font-normal">
              We have the best rates . Simply start your exchange right now.
              Sign up for our Affiliate program and earn commission from each
              exchange. The earnings are credited in your account instantly and
              can be withdrawn right away. Also note some exchange directions
              are hidden for unregistered user. To ensure to have access to all
              our exchange directions and benefits kindly sign up and verify
              your identity.
            </p>
          </div>
          <div className="sm:ml-[36px] ml-[560px] sm:mt-[35px] mt-[60px]">
            <Simplebtn text="DISCOVER" />
          </div>
        </div>
      </div>
      <div className="sm:h-[955.57px] h-[1500px] sm:mt-1 mt-5 bg-gradient-to-b from-[#FD749B]  to-[#281AC8]">
        <img src={Pth1} alt="" />
        <Box1 />
        <img className="sm:mt-28 mt-[50px]" src={Pth2} alt="" />
      </div>
      <div className="flex sm:flex-row flex-col-reverse mt-10">
        <div className=" sm:ml-[218px] ml-[40px] sm:mt-0 mt-10 sm:w-[550px] h-[500px]">
          <span className="sm:w-[254px] h-[84px] font-popins bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent sm:text-4xl text-7xl leading-[42px] font-bold not-italic sm:ml-0 ml-36">
            Great experience with CoinBase
          </span>
          <img
            className="sm:mt-[18px] mt-[50px] sm:w-[50px] w-[200px] sm:ml-0 ml-[575px]"
            src={Line}
            alt=""
          />
          <p className="mt-[50px] sm:px-0 px-20 sm:text-[16px] text-3xl sm:leading-[40px] leading-[80px] font-normal not-italic">
            CoinBase is an online site and a p2admin platform that allows users
            to buy, sell and/ or exchange digital and fiat assets safely. Owned
            and managed by CoinBase Business Services established and
            Incoperated in Nigeria.
          </p>
          <div className="sm:mt-8 sm:ml-0 mt-20 ml-[530px]">
            <Simplebtn text="DISCOVER" />
          </div>
        </div>
        <div className="sm:ml-[55px] ml-[450px] ">
          <img src={IMG2} alt="" />
        </div>
      </div>
      <Trade />
      <Blog />
      <Clients />
      <Last />
    </>
  );
}
