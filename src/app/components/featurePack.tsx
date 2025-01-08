"use client";

import {
  BrainCircuit,
  FileUser,
  Palette,
  FileArchive,
  Notebook,
  FileSearch,
} from "lucide-react";

import Link from "next/link";

export default function FeaturePack() {
  return (
    <div className=" w-full  my-8">
      <div className="flex justify-center">
        <div >
          <h1 className=" text-black font-semibold text-4xl my-6 text-center">
            Get hired 36% faster with our feature-packed and <br />
            easy-to-use resume builder app
          </h1>
          <h2  className=" text-black  text-lg my-6 text-center">
            ResumeBuilder. com is now part of Bold LLC. For more information
            visit our <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
          </h2>
        </div>
      </div>
         <div className=" flex flex-col gap-3 items-center  ">
         <div className=" flex flex-wrap justify-around w-full ">
        <div>
          <BrainCircuit className=" text-purple-600 my-3 " size={40} />
          


          <h1 className=" text-black text-3xl font-semibold ">
            Powerful resume builder
          </h1>
          <p className=" text-gray-900 text-xl ">
            Use our potent creation tools and expert <br /> guidance to create
            the perfect resume for <br /> your next job application.
          </p>
        </div>
        <div>
          <FileUser className=" text-purple-600 my-3" size={40} /> 
          <h1 className=" text-black text-3xl font-semibold ">
            Professional templates
          </h1>
          <p className=" text-gray-900 text-xl ">
            Choose from 25+ applicant tracking systems <br /> (ATS)-friendly
            modern and professional <br /> templates
          </p>
        </div>
        <div>
          <Palette className=" text-purple-600 my-3" size={40} />
          <h1 className=" text-black text-3xl font-semibold ">
            Customize fonts and colors
          </h1>
          <p className=" text-gray-900 text-xl ">
            Select custom fonts and colors on any resume <br /> template.
          </p>
        </div>
        </div>

        <div className=" flex flex-wrap justify-around w-full  ">
        <div>
        <FileArchive className=" text-purple-600 my-3 " size={40} />
          
          <h1 className=" text-black text-3xl font-semibold ">
          Free resume examples
          </h1>
          <p className=" text-gray-900 text-xl ">
          Use our more than 500 resume <br /> examples and templates to see what <br /> a great resume looks like in your field.
          </p>
        </div>
        <div>
        <Notebook className=" text-purple-600 my-3 " size={40} />
          <h1 className=" text-black text-3xl font-semibold ">
          ATS-friendly templates
          </h1>
          <p className=" text-gray-900 text-xl ">
          Sail through applicant tracking systems with <br /> resume templates that appeal to both <br /> machines and humans.
          </p>
        </div>
        <div>
        <FileSearch className=" text-purple-600 my-3 " size={40} />

          <h1 className=" text-black text-3xl font-semibold ">
          Expert tips and guidance
          </h1>
          <p className=" text-gray-900 text-xl ">
          Get help every step of the way as you build <br /> your resume with expert tips and suggested <br /> phrases.
          </p>
        </div>
        </div>
        </div>
      <div className="flex justify-center">
        <button className=" rounded-md bg-purple-600 text-white p-3 my-8 ">
          <Link href={"/templates"} >
          Get Started Now
          </Link>
        </button>
      </div>
    </div>
  );
}
