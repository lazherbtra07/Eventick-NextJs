"use client";
import React from "react";
import { FaNapster, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDropup } from "react-icons/io";

export const Footer = () => {
  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="contact" className="bg-[#0A075F]">
      <div className="container px-5 md:px-16">
        <div className=" lg:flex  lg:justify-between text-center pt-16 mb-10">
          <div className="flex flex-col items-center lg:justify-start">
            <div className="flex items-center mb-4">
              <FaNapster className="w-8 h-8 mr-2" />
              <Image
                alt="event"
                src={"/Eventick.png"}
                width={110}
                height={35}
              />
            </div>
            <div>
              <p className="text-[14px] font-extralight  lg:w-[333px]   mb-4">
                Eventick is a global self-service ticketing platform for live
                experiences that allows anyone to create, share, find and attend
                events that fuel their passions and enrich their lives.
              </p>
              <div className="flex justify-center items-center mb-5 lg:mb-0 gap-3">
                <Link href={"/"}>
                  <FaFacebook
                    size={27}
                    className=" text-[#3B5998] hover:text-white "
                  />
                </Link>
                <Link href={"/"}>
                  <FaTwitter
                    size={27}
                    className=" text-[#55ACEE] hover:text-white "
                  />
                </Link>
                <Link href={"/"}>
                  <FaLinkedin
                    size={27}
                    className=" text-[#007AB9] hover:text-white "
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-x-16 md:gap-x-32 lg:gap-x-5 mb-8 lg:mb-0">
            <ul className="text-[14px] font-extralight flex flex-col  gap-2">
              <h3 className=" text-[18px] font-bold mb-6">Plan Events</h3>
              <li>Create and Set Up</li>
              <li>Sell Tickets</li>
              <li>Online RSVP </li>
              <li>Online Events</li>
            </ul>
            <ul className="text-[14px] font-extralight flex flex-col gap-2">
              <h3 className="text-[18px] font-bold mb-6">Eventick</h3>
              <li>About Us</li>
              <li>Press</li>
              <li>Contact Us </li>
              <li>Help Center</li>
              <li>How it Works</li>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
          <div>
            <h1 className="text-[18px] font-bold mb-6">Stay in the loop</h1>
            <p className="lg:w-[333px] px-10 lg:px-0 text-[14px] font-extralight mb-5">
              Join our mailing list to stay in the loop with our newest for
              Event and concert
            </p>
            <div className="flex items-center justify-center rounded-full">
              <input
                type="email"
                placeholder="Enter your email address.."
                className="p-5 text-[12px] text-black outline-none  rounded-bl-full rounded-tl-full"
              />
              <div className="bg-white  p-2 rounded-br-full rounded-tr-full">
                <button className=" text-white bg-[#F5167E] hover:bg-[#ff58a6] text-[12px] px-5 py-3 rounded-full ">
                  Subscibe Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <p className="text-[14px] text-center font-extralight py-5  w-full border border-spacing-1 border-r-transparent border-l-transparent border-b-transparent border-[#4C4D8B]">
            Copyright © 2022 Avi Yansah
          </p>
        </div>
        {/* scroll to top button */}
        <div
          id="icon-box"
          className="z-10  !scroll-smooth bg-white hover:bg-[#0A075F]      p-[2px] lg:p3 rounded-full  cursor-pointer fixed md:bottom-6 bottom-[75px] right-3"
          onClick={top}
        >
          <span className=" text-[#0A075F] hover:text-white  ">
            <IoIosArrowDropup size={40} />
          </span>
        </div>
      </div>
    </section>
  );
};
