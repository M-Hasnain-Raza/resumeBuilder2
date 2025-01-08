"use client";

import { Button } from "antd";
import Image from "next/image";

import  bloomberg  from "../assets/bloomberg.jpg";
import  huffpost  from "../assets/huffpost.png";
import  msn  from "../assets/msn.png";
import  npr  from "../assets/npr.png";
import  wired  from "../assets/wired.png";




export default function CallOut() {
  return (
      <div className="callOut h-[80svh] mt-14 ">
       <div className="flex flex-col text-center backdrop-blur-lg h-full ">
          <div>
          <h2 className=" font-bold text-7xl  text-white py-14 ">
            Let’s Land Your Dream <br /> Job Together
          </h2>
          </div>
          <div>
          <Button className=" py-6 border-white text-white bg-purple-600 text-lg font-bold">
            Start Your Resume Now
          </Button>
          <div className=" flex">
            {/* <Image src={bloomberg} alt=""></Image>
            <Image src={huffpost} alt=""></Image>
            <Image src={msn} alt=""></Image>
            <Image src={npr} alt=""></Image>
            <Image src={wired} alt=""></Image> */}
          </div>
          </div>
       </div>
      </div>
  );
}
