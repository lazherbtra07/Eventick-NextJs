"use client";
import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className=" relative w-fit">
      <div className=" ">
        <Image
          className=" absolute h-[450px] lg:h-fit "
          alt="graideant"
          src={"/Rectangle 10.png"}
          width={1440}
          height={550}
        />
      </div>
      <Image
        className=" h-[450px] lg:h-fit "
        src="/Rectangle 12.png"
        alt={"rectangle"}
        width={1440}
        height={550}
      />
      <div className=" container h-[550px] lg:h-fit lg:flex     items-center ">
        <div className="absolute top-[80px]  lg:top-[100px]  md:left-[25%] md:right-[25%]   lg:left-[71px] lg:w-1/2">
          <Image
            className=" h-[300px] md:h-[300px] lg:h-[350px]"
            alt="pang"
            src={"/pngguru 2.png"}
            width={636}
            height={476}
          />
        </div>
        <div className="absolute pt-14 text-center lg:text-start lg:top-[100px] lg:left-[50%] lg:ml-24   lg:w-fit  ">
          <h2 className=" xl:text-[40px]   text-[30px] font-bold mb-4">
            SBS MTV The Kpop <br />
            Show Ticket Package
          </h2>
          <p className="text-[18px] font-thin px-10 lg:px-0 lg:w-2/3 lg:mb-4 mb-7">
            Look no further! Our SBS The Show tickets are the simplest way for
            you to experience a live Kpop recording
          </p>
          <button className="text-[18px] font-bold leading-5 px-8 py-3   rounded-full bg-[#F5167E] hover:bg-[#f9b0d2]">
            Get Ticket
          </button>
          <button className="text-[18px] font-bold leading-5 px-8 py-3 border border-white  rounded-full  ml-5 hover:bg-slate-500">
            Learn More
          </button>
        </div>
      </div>
      <div className="    lg:right-32 w-[90%] lg:w-[80%] lg:left-[10%] left-[5%]   absolute z-10 -bottom-20  lg:flex justify-center items-center bg-[#242565] shadow-[#242565] drop-shadow-2xl rounded-2xl p-8">
        <div className="flex flex-col mb-4 lg:mb-0 lg:w-[290px]">
          <span className="text-[16px] font-thin text-gray-200">
            Search Event
          </span>
          <input
            type="text"
            placeholder="Konser Jazz"
            className="bg-transparent border  outline-none border-gray-400 border-l-0 border-r-0 border-t-0"
          />
        </div>
        <div className="flex flex-col mb-4 lg:mb-0 lg:w-[290px] lg:ml-14">
          <span className="text-[16px] font-thin text-gray-200">Place</span>
          <input
            type="text"
            placeholder="Canada"
            className="bg-transparent border outline-none border-gray-400 border-l-0 border-r-0 border-t-0"
          />
        </div>
        <div className="flex flex-col mb-4 lg:mb-0 lg:w-[290px] lg:ml-14">
          <span className="text-[16px] font-thin text-gray-200">Time</span>
          <select
            id="countries"
            className=" bg-transparent border outline-none border-gray-400 border-l-0 border-r-0 border-t-0"
          >
            <option selected>Choose a country</option>
            <option value="US">Any Time</option>
            <option value="CA">Part Time</option>
            <option value="FR">Full Time</option>
          </select>
        </div>
      </div>
    </div>
  );
};
