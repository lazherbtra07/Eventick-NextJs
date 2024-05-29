import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Brands = () => {
  return (
    <section className=" bg-white py-28">
      <div className="container flex flex-col justify-center items-center">
        <h1 className="text-[40px] text-[#242565] font-bold mb-4">
          Join these brands
        </h1>
        <p className="text-[18px] font-extralight text-[#6A6A6A] lg:w-[630px] px-10 lg:px-0 text-center mb-16">
          We've had the pleasure of working with industry-defining brands. These
          are just some of them.
        </p>
        <div>
          <div className="flex flex-col justify-center items-center gap-y-5 px-3 lg:px-0 ">
            <div className="flex items-center gap-x-8">
              <Link href={"/"}>
                <Image
                  alt="image"
                  src={"/image 4 (1).png"}
                  width={150}
                  height={50}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  alt="image"
                  src={"/image 5 (1).png"}
                  width={150}
                  height={50}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  alt="image"
                  src={"/image 14.png"}
                  width={150}
                  height={50}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  alt="image"
                  src={"/image 15 (3).png"}
                  width={150}
                  height={50}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  alt="image"
                  src={"/image 16.png"}
                  width={150}
                  height={50}
                />
              </Link>
            </div>
            <div className="flex items-center gap-x-8 ">
              <Link href={"/"}>
                <Image
                  alt="image"
                  src={"/image 17.png"}
                  width={150}
                  height={50}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  alt="image"
                  src={"/image 18.png"}
                  width={150}
                  height={50}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  alt="image"
                  src={"/image 19.png"}
                  width={150}
                  height={50}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  alt="image"
                  src={"/image 20.png"}
                  width={150}
                  height={50}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
