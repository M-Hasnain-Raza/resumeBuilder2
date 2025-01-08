"use client";

import resume3 from "../assets/resume3.png";
import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Dot } from "lucide-react";
import { Button, Input } from "antd"
import React, { useState } from "react";

const { TextArea } = Input;

const TemplateForm :  React.FC<{children : React.JSX.Element}> = ({children}) => {

  const [ name, setName] = useState("JEFF BEZOS");
  const [ designation, setDesignation] = useState("MERN Stack Developer");
  const [ phone, setPhone] = useState("+92 34567890");
  const [ email, setEmail] = useState("jeff123@gmail.com");
  const [ address, setAddress] = useState(" 12 ST, CHICAGO");
  const [ portfolio, setPortfolio] = useState("www.jeff.com");
  const [ education, setEducation] = useState("Bs in Robotics");
  const [ educationYear, setEducationYear] = useState("2020-2024");
  const [ skills, setSkills] = useState("Programing");
  const [ profile, setProfile] = useState("I am jeff bezos i started my kiryana store");
  const [ experience, setExperience] = useState("real state agent");
  const [ experienceCompany, setExperienceCompany] = useState("ABC Builders");
  const [ experienceYear, setExperienceYear] = useState("2015 - present");

  return (
    <div className="flex">
      <div className=" pt-16 resumeInputs w-2/3">
        <Button className=" btn bg-purple-600 border-0 text-white ml-16 my-3">
          <Link href={"/"}>Back
          </Link>
          
        </Button>
        <h1 className=" text-black text-3xl font-semibold text-center ">
          What’s the best way for employers to contact you?
        </h1>
        <p className=" text-gray-900 text-lg text-center ">
          We suggest including an email and phone number.
        </p>

        <div className=" flex flex-wrap gap-5 justify-center py-6">
          <div >
            <h1 className=" text-sm mb-1 text-black font-semibold ">FULL NAME</h1>
            <Input onChange={ (e) => { setName( e.target.value)
            }} className=" w-52" placeholder={name}></Input>
          </div>
          <div>
          <h1 className=" text-sm mb-1 text-black font-semibold ">DESIGNATION</h1>
            <Input onChange={ (e) => { setDesignation( e.target.value)
            }} className=" w-52" placeholder={designation}></Input>
          </div>
          <div>
          <h1 className=" text-sm mb-1 text-black font-semibold ">PHONE</h1>
            <Input onChange={ (e) => { setPhone( e.target.value)
            }} className=" w-52 " placeholder={phone}></Input>
          </div>
          <div>
          <h1 className=" text-sm mb-1 text-black font-semibold ">EMAIL</h1>
            <Input onChange={ (e) => { setEmail( e.target.value)
            }} className=" w-52 " placeholder={email}></Input>
          </div>
          <div>
          <h1 className=" text-sm mb-1 text-black font-semibold ">ADDRESS</h1>
            <Input onChange={ (e) => { setAddress( e.target.value)
            }} className=" w-52 " placeholder={address}></Input>
          </div>
          <div>
          <h1 className=" text-sm mb-1 text-black font-semibold ">PORTFOLIO</h1>
            <Input onChange={ (e) => { setPortfolio( e.target.value)
            }} className=" w-52 " placeholder={portfolio}></Input>
          </div>
          <div>
          <h1 className=" text-sm mb-1 text-black font-semibold ">EDUCATION</h1>
            <Input onChange={ (e) => { setEducation( e.target.value)
            }} className=" w-52 " placeholder={education}></Input>
          </div>
          <div>
          <h1 className=" text-sm mb-1 text-black font-semibold ">EDUCATION-YEAR</h1>
            <Input onChange={ (e) => { setEducationYear( e.target.value)
            }} className=" w-52 " placeholder={educationYear}></Input>
          </div>
          <div>
          <h1 className=" text-sm mb-1 text-black font-semibold ">SKILLS</h1>
            <Input onChange={ (e) => { setSkills( e.target.value)
            }} className=" w-52 " placeholder=" development"></Input>
          </div>
          <div>
          <h1 className=" text-sm mb-1 text-black font-semibold ">PROFILE</h1>
            <TextArea onChange={ (e) => { setProfile( e.target.value)
            }} className=" w-52 " placeholder=" about you"></ TextArea >
          </div>
          <div>
          <h1 className=" text-sm mb-1 text-black font-semibold ">EXPERIENCE</h1>
            <Input onChange={ (e) => { setExperience( e.target.value)
            }} className=" w-52 " placeholder=" real state agent"></Input>
          </div>
          <div>
          <h1 className=" text-sm mb-1 text-black font-semibold ">EXPERIENCE-COMPANY</h1>
            <Input onChange={ (e) => { setExperienceCompany( e.target.value)
            }} className=" w-52 " placeholder=" ABC Builders"></Input>
          </div>
          <div>
          <h1 className=" text-sm mb-1 text-black font-semibold ">EXPERIENCE-YEAR</h1>
            <Input onChange={ (e) => { setExperienceYear( e.target.value)
            }} className=" w-52 " placeholder=" 1920 - 1947"></Input>
          </div>
        </div>
      </div>

      <div className="  flex  flex-col py-16 ">

        {children}
        

        <div className=" flex justify-evenly p-3">
          <Button className=" btn bg-purple-600 text-white border-0">
            Change Template
          </Button>
          <Button className=" btn bg-white text-purple-600 border border-purple-600">
            Download PDF
          </Button>
        </div>
      </div>
    </div>
  );
}


export default TemplateForm;