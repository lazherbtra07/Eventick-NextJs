"use client";
import React, { useState } from "react";
import { FaNapster, FaXmark, FaBars } from "react-icons/fa6";
import Image from "next/image";
import { Link } from "react-scroll";
import Headroom from "react-headroom";

const data = [
  { path: "Schedule", link: "Schedule" },
  { path: "Speakers", link: "Speakers" },
  { path: "Ticket", link: "Ticket" },
  { path: "contact", link: "Contact" },
];

export const Header = () => {
  const [isOpen, setisOpen] = useState(false);

  const togleMenu = () => setisOpen(!isOpen);

  return (
    <nav className=" w-full absolute z-10    ">
      <div className="container flex  justify-between items-center px-5 top-[80px] md:px-16 py-5">
        <div className="flex  items-center">
          <FaNapster className="w-8 h-8 mr-2" />
          <Image alt="event" src={"/Eventick.png"} width={110} height={35} />
        </div>
        <div className=" hidden  lg:flex flex-row justify-between items-center ">
          {data.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
              className=" text-[16px] cursor-pointer font-medium mr-[38px]"
            >
              {link}
            </Link>
          ))}
          <button className="px-6 py-2 border border-white rounded-full">
            Login
          </button>
        </div>
        {/* mobile moode */}
        <div className="lg:hidden" onClick={togleMenu}>
          {isOpen ? (
            <div className="">
              <FaXmark size={25} />
              <div className="absolute top-20 flex flex-col justify-center  gap-y-10 py-5 bg-slate-400 w-full h-fit left-0 rounded-br-2xl rounded-bl-2xl">
                {data.map(({ link, path }) => (
                  <Link
                    onClick={() => setisOpen(false)}
                    to={path}
                    spy={true}
                    offset={-100}
                    smooth={true}
                    className="  text-[25px] text-center cursor-pointer font-medium "
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <FaBars size={25} />
          )}
        </div>
      </div>
    </nav>
  );
};
