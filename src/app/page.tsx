import Image from "next/image";
import { Hero } from "./components/Hero";
import { Events } from "./components/Events";
import { Make } from "./components/Make";
import { Brands } from "./components/Brands";
import { Blog } from "./components/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <Events />
      <Make />
      <Brands />
      <Blog />
    </>
  );
}
