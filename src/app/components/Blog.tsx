import React from "react";
import { blogCard } from "../Data";
import Image from "next/image";

export const Blog = () => {
  return (
    <section id="Ticket" className=" bg-[#ffffff]">
      <div className="container px-5 md:px-16">
        <div className=" flex flex-col justify-center items-center">
          <h1 className="text-[40px] font-bold text-[#242565] mb-6">Blog</h1>
          <p className="text-[18px] text-center px-10 lg:px-0 font-extralight text-[#6A6A6A] mb-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="grid lg:grid-cols-3 lg:gap-5 mb-14 text-black">
            {blogCard.map((item, index) => (
              <div key={index}>
                <Image
                  className="mb-5 w-full"
                  alt="img"
                  src={item.image}
                  width={600}
                  height={500}
                />
                <h1 className="text-[20px] text-center lg:text-start text-[#242565] font-bold mb-5">
                  {item.title}
                </h1>
                <p className="text-[16px] text-center lg:text-start font-extralight mb-5">
                  {item.script}
                </p>
                <p className="text-[14px] text-center lg:text-start mb-5 lg:mb-0 font-extralight text-[#A5A5A5]">
                  {item.date}
                </p>
              </div>
            ))}
          </div>
          <button className="text-[18px] font-bold px-5 py-2 text-[#3D37F1] border border-[#3D37F1] rounded-full hover:bg-slate-100 mb-14">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};
