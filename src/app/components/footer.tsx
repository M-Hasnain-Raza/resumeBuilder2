import { Twitter, Instagram, Facebook, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div className=" bg-gray-200">

    <div className=" flex justify-around py-20 ">
      <div >
        <h2 className=" text-lg text-black max-w-40 ">
          Easily create the perfect resume for any job.
        </h2>
        <div className=" flex gap-2 py-2">
        <Facebook className="text-purple-600 "></Facebook>
        <Twitter className="text-purple-600"></Twitter>
        <Instagram className=" text-purple-600 "></Instagram>
        <Github className=" text-purple-600 "></Github>
        <Linkedin className=" text-purple-600 "></Linkedin>
        </div>
      </div>
      <div className="  ">
        <h2 className="text-lg text-black font-semibold">Build Your Resume</h2>
        <h2 className=" text-lg text-black leading-loose ">Basic Resume Examples</h2>
        <h2 className=" text-lg text-black leading-loose ">How To Write a Resume</h2>
        <h2 className=" text-lg text-black leading-loose ">Resume Builder App</h2>
        <h2 className=" text-lg text-black leading-loose ">Cover Letter Builder</h2>
        <h2 className=" text-lg text-black leading-loose ">Resume Examples</h2>
        <h2 className=" text-lg text-black leading-loose ">Resume Templates</h2>
      </div>
      <div>
        <h2 className="text-lg text-black font-semibold ">Career Resources</h2>
        <h2 className=" text-lg text-black leading-loose ">Cover Letter Examples</h2>
        <h2 className=" text-lg text-black leading-loose ">How To Write a Cover Letter</h2>
        <h2 className=" text-lg text-black leading-loose ">Job Search Resource Center</h2>
        <h2 className=" text-lg text-black leading-loose ">Thank You Note Examples</h2>
      </div>
      <div>
        <h2 className="text-lg text-black font-semibold ">
          About Resume Builder
        </h2>
        <h2 className=" text-lg text-black leading-loose ">About Us</h2>
        <h2 className=" text-lg text-black leading-loose ">Contact Us</h2>
        <h2 className=" text-lg text-black leading-loose ">Privacy Policy</h2>
        <h2 className=" text-lg text-black leading-loose ">Terms of Service</h2>
        <h2 className=" text-lg text-black leading-loose ">Press</h2>
        <h2 className=" text-lg text-black leading-loose ">Accessibility</h2>
        <h2 className=" text-lg text-black leading-loose ">Do Not Sell or Share</h2>
      </div>


    </div>


<h2 className=" text-center py-10 text-lg text-black">© 2024, All rights reserved.</h2>

    </div>
  );
}
