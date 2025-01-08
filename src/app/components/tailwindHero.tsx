"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
// const navigation = [
//   { name: "Product", href: "#" },
//   { name: "Features", href: "#" },
//   { name: "Marketplace", href: "#" },
//   { name: "Company", href: "#" },
// ];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);

  return (
    <div className="bg-white ">
      <div className="relative isolate px-6 pt-20 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl  sm:py-24 ">
          
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Resume Builder helps you get hired at top companies
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Easily create the perfect resume for any job using our best-in-class resume builder platform.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className='border bg-purple-600 text-white p-3 rounded-lg'>
              <Link href={"/templates"}>
              Build Your Resume Now</Link>
              </button>     

            <button className='border border-purple-600 text-purple-600 p-3 rounded-lg'>Download Your Resume</button>     

            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
