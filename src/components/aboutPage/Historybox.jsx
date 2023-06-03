import React from "react";
import Line from "../../assets/Line.svg";
import tree from '../../assets/Aboutasts/Tree.png'
export default function History() {
  return (
    <div>
      <div className="sm:ml-[640px] ml-[590px] sm:mt-24 mt-32 font-popins bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent sm:text-[28px] text-5xl leading-[65px] font-bold">
        Our History
      </div>
      <img
        className="sm:ml-[690px] ml-[655px] sm:mt-0 mt-5 sm:w-[50px] w-[120px]"
        src={Line}
        alt=""
      />
      <div className="flex ml-[210px] mt-[100px]">
      <div className="ml-14">
        <div className="mt-5 w-[400px] h-[200px]">
          <div className="flex justify-end bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent sm:text-[28px] text-4xl font-bold">
            May 2010
          </div>
          <div className="mt-5 text-right sm:text-[14px] text-2xl leading-[30px]">
            Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem.
            Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum.
            Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum
            nibh.uspendisse
          </div>
        </div>
        <div className="mt-[230px] w-[400px] h-[200px]">
          <div className="flex justify-end bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent sm:text-[28px] text-4xl font-bold">
            May 2019
          </div>
          <div className="mt-5 text-right sm:text-[14px] text-2xl leading-[30px]">
            Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem.
            Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum.
            Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum
            nibh.uspendisse
          </div>
        </div>
      </div>
      <div>
        <img className="ml-10" src={tree} alt="" />
        <div className="mt-5">To be continue…</div>
      </div>
      <div className="mt-[240px] w-[400px] h-[200px]">
          <div className="bg-gradient-to-b from-[#FD749B]  to-[#281AC8] bg-clip-text text-transparent sm:text-[28px] text-4xl font-bold">
            May 2017
          </div>
          <div className="mt-5 text-left sm:text-[14px] text-2xl leading-[30px]">
            Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem.
            Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum.
            Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum
            nibh.uspendisse
          </div>
        </div>
      </div>
    </div>
  );
}
