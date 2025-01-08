"use client"
import resume1 from "../assets/resume1.png";
import resume2 from "../assets/resume2.png";
import resume3 from "../assets/resume3.png";

import Image from "next/image";

import { Button } from "antd";


export default function Template() {
  return (
    <div className=" w-full mb-10">
      <div className=" flex justify-center">
        <h1 className=" text-black text-4xl font-semibold mb-10 text-center">
          Pick a resume template and build your <br /> resume in minutes!
        </h1>
      </div>
      <div className=" flex justify-evenly ">
        <div className=" box relative">
          <Image
            src={resume1}
            alt=""
            width={300}
            className="border border-black  hover:backdrop:blur-sm "
          />
          <Button className=" btn hidden absolute top-1/2 ml-16 p-4 text-lg text-white bg-purple-600 border-0   ">Use This Template</Button>
        </div>
        <div className=" box relative">
          {" "}
          <Image
            src={resume2}
            alt=""
            width={300}
            className="border border-black "
          />
          <Button className=" btn hidden absolute top-1/2 ml-16 p-4 text-lg text-white bg-purple-600 border-0 ">Use This Template</Button>
        </div>{" "}
        <div className=" box relative">
          <Image
            src={resume3}
            alt=""
            width={300}
            className="border border-black "
          />
          <Button className=" btn hidden absolute top-1/2 ml-16 p-4 text-lg text-white bg-purple-600 border-0 " >Use This Template</Button>
        </div>
      </div>
    </div>
  );
}
