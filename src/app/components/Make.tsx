import React from "react";
import Image from "next/image";

export const Make = () => {
  return (
    <section
      id="Speakers"
      className="w-full  relative h-[550px] lg:h-[252px] bg-[#EEE1FF]"
    >
      <div className="container">
        <Image
          className=" absolute bottom-0"
          alt="img"
          src={"/image 3 (1).png"}
          width={544}
          height={303}
        />
        <div className=" absolute w-full  md:w-fit text-center md:left-[50%] py-9">
          <h1 className="text-[34px] font-bold text-black mb-2">
            Make your own Event{" "}
          </h1>
          <p className="text-[18px] font-extralight text-[#272727] px-10 lg:px-0 lg:w-[382px] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
          <button className="text-[18px] font-bold px-14 py-2 bg-[#F5167E] hover:bg-[#ff67ae] rounded-full">
            Creat Events
          </button>
        </div>
      </div>
    </section>
  );
};
