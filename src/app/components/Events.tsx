import React from "react";
import { eventCard } from "../Data";
import Image from "next/image";

export const Events = () => {
  return (
    <section id="Schedule" className=" pt-40 pb-20 bg-[#ffffff]">
      <div className="container px-5 md:px-16">
        <div className="flex flex-col lg:flex-row  lg:justify-between items-center ">
          <h1 className="text-[#242565] text-[40px] font-bold mb-5">
            Upcoming Events
          </h1>
          <div className="">
            <select
              id="countries"
              className=" cursor-pointer bg-[#F2F4FF] outline-none text-[#1D275F] px-1 py-2  rounded-full"
            >
              <option value="time">daily</option>
              <option value="time">Weekday</option>
              <option value="time">mounthday</option>
              <option value="time">Yearday</option>
            </select>
            <select
              id="countries"
              className="cursor-pointer bg-[#F2F4FF] outline-none text-[#1D275F] px-1  py-2 rounded-full ml-2"
            >
              <option value="time">Event Type</option>
              <option value="time">Weekday</option>
              <option value="time">mounthday</option>
              <option value="time">Yearday</option>
            </select>
            <select
              id="countries"
              className="cursor-pointer bg-[#F2F4FF] outline-none text-[#1D275F] px-1  py-2 rounded-full ml-2"
            >
              <option value="time">Any Category</option>
              <option value="time">Weekday</option>
              <option value="time">mounthday</option>
              <option value="time">Yearday</option>
            </select>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-black mt-20 mb-16">
          {eventCard.map((item, index) => (
            <div className=" rounded-2xl drop-shadow-2xl md:drop-shadow-sm   md:hover:drop-shadow-2xl bg-white cursor-pointer">
              <div>
                <Image alt="image" src={item.image} width={900} height={600} />
              </div>
              <div className="flex justify-center">
                <div className="py-5 pl-5 leading-5">
                  <span className="text-[11px] text-[#3D37F1] font-bold">
                    {item.mounth}
                  </span>
                  <h2 className="text-[28px] font-bold">{item.day}</h2>
                </div>
                <div className="p-5">
                  <h3 className="text-[16px] font-bold leading-6 ">
                    {item.title}
                  </h3>
                  <p className="text-[14px] font-extralight text-[#6A6A6A]">
                    {item.script}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className=" texy-[18px] text-[#3D37F1] font-bold px-10 py-4 border border-spacing-1 border-[#3D37F1] rounded-full hover:bg-slate-50">
            Lead More
          </button>
        </div>
      </div>
    </section>
  );
};
