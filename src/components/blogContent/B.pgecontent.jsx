import React from "react";
import IMG from "../../assets/Blogcontent/IMG.png";
import Fb from "../../assets/Blogcontent/ficon.png";
import Tw from "../../assets/Blogcontent/ticon.png";
import Yt from "../../assets/Blogcontent/yicon.png";
import Simplebtn from "../Button";

export default function Bcontent() {
  return (
    <>
      <div className="flex justify-center items-center not-italic sm:text-[32px] text-4xl leading-[45px] font-bold text-white h-[750px] bg-[url('./assets/Blogcontent/BG.png')]">
        <div>
          ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER <br />
          <span className="ml-[280px]">Transactions</span>
        </div>
      </div>
      <div className="px-[300px] not-italic sm:text-[16px] text-2xl leading-[28px] font-normal">
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness. But I must
        explain to you how all this mistaken idea of denouncing pleasure and
        praising pain was born and I will give you a complete account of the
        system, and expound the actual teachings of the great explorer of the
        truth, the master-builder of human happiness.
        <br />
        <br />
        Planning Your Luxury Trip
        <br />
        <br />
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness.But I must
        explain to you how all this mistaken idea of denouncing pleasure and
        praising pain was born and I will give you a complete account of the
        system, and expound the actual teachings of the great explorer of the
        truth, the master-builder of human happiness.
        <br />
        <br />
        The next part of planning is to determine your starting and ending
        ports. This could be a place close to home and sail in one area or start
        and finish at two different ports. Generally, starting and stopping in
        the same port will save you money and is usually more convenient. You
        can also fly to a destination far from home and then sail another exotic
        sea. There are luxury yacht charter companies that cruise the Caribbean
        and Mediterranean seas or around Alaska, the Panama Canal, or anyplace
        you can imagine.
        <br />
        <br />
        Determining the type of cruise is another aspect of planning a chartered
        yachting trip. You can have as little or many crew members as the ship
        will hold. A captain takes all the worries out of navigating and onboard
        housekeeping services make it a real vacation that rivals the finest
        hotel services. You can also choose to have a chef and service crew as
        part of your vacation package.
      </div>
      <div className="flex mt-14 ml-[300px]">
        <div className="sm:w-[350px] w-[450px] h-[480px] not-italic sm:text-[16px] text-2xl leading-[28px] font-normal">
          If you like the idea of knowing what it is really like to sail, but
          don’t want to risk safety, you can charter a sailing cruise that puts
          you in the role of deck hand. A competent crew will direct you as to
          your “chores” for keeping the ship in top shape and on course.
          <br />
          <br />
          Destinations & Ports of important Charter Companies One of the
          greatest benefits of choosing a chartered cruise as a vacation is the
          choice. You will most likely have a rough itinerary and that can be
          affected by weather. However, you are flexible in deciding how long
          you want to stay in a particular port and if you want to add or
          subtract stops along the way.
        </div>
        <div className="sm:ml-24 ml-2">
          <img src={IMG} alt="" />
        </div>
      </div>
      <div className="px-[300px] mt-14 not-italic sm:text-[16px] text-2xl leading-[28px] font-normal">
        Your yacht is your hotel that travels with you. There is only one flight
        and one hotel to book! Then you take all of your luggage and unpack it
        just once to enjoy several days of new destinations.
        <br />
        <br />
        If you have never experienced cruising before, a chartered experience is
        a great way to get your feet wet. It is different from cruise lines with
        thousands of guests because the people on your ship will be your friends
        and family. The personal touches of a chartered trip will help you
        develop your love for the sea with all the best benefits of commercial
        cruises.
      </div>
      <div className="flex justify-between px-[300px] mt-24">
        <span className="italic sm:text-[16px] text-2xl leading-[23px] font-bold mt-2">
          Tags: Business, Capital, Finance
        </span>

        <div className="flex gap-5">
          <span className="not-italic sm:text-[16px] text-xl leading-[23px] font-normal mt-2">
            Share with
          </span>
          <img src={Fb} alt="" />
          <img src={Tw} alt="" />
          <img src={Yt} alt="" />
        </div>
      </div>
      <div className="flex justify-between px-[300px] mt-16">
        <span className=" sm:text-[18px] text-2xl sm:leading-[25px] leading-[40px] font-bold">
          How to sell your iTunes
          <br /> giftcard with us
        </span>
        <span className=" text-right text-transparent bg-clip-text bg-gradient-to-b from-[#FD749B]  to-[#281AC8] font-sans sm:text-[18px] text-2xl sm:leading-[25px] leading-[40px] font-bold ">
          Exchange 5 products
          <br /> and get 1 free product
        </span>
      </div>
      <div className="flex justify-between px-[300px] sm:mt-5 mt-10">
        <span className=" sm:text-[12px] text-lg leading-[17px] font-normal">
          Prev Post
        </span>
        <span className=" text-right sm:text-[12px] text-lg leading-[17px] font-normal">
          Next Post
        </span>
      </div>
      <div className="px-[300px] sm:mt-28 mt-32">
        <span className=" sm:text-[24px] text-3xl leading-[51px] font-bold">
          Leave A Comment
        </span>
        <br />
        <span className=" sm:text-[16px] text-xl leading-[23px] font-normal">
          Your email address will not be published. Required fields are marked *
        </span>
      </div>
      <div className="flex px-[300px] mt-16">
        <input
          className="border-2 border-[#D1D1D1] w-[400px] h-[60px] pl-5 text-[14px] leading-[20px] font-normal text-[#2F2F2F]"
          placeholder="Name*"
        />
        <input
          className="border-2 border-[#D1D1D1] w-[400px] h-[60px] pl-5 ml-10 text-[14px] leading-[20px] font-normal text-[#2F2F2F]"
          placeholder="Email*"
        />
      </div>
      <div className="px-[300px] mt-8">
      <textarea
          className="border-2 border-[#D1D1D1] w-[830px] h-[190px] pl-5 pt-5 text-[14px] leading-[20px] font-normal text-[#2F2F2F]"
          placeholder="Your Comment"/>
          </div>
         <div className="sm:px-[300px] px-[550px] sm:mt-12 mt-16">
         <Simplebtn text="PUBLISH" /> 
         </div>
    </>
  );
}
