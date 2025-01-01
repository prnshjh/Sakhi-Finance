"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroSection = () => {

   const imageRef = useRef();

   useEffect(() => {
      const imageElement = imageRef.current;

      const handleScroll = () => {
         const scrollPosition = window.scrollY;
         const scrollThreshold = 100;

         if(scrollPosition > scrollThreshold){
            imageElement.classList.add("scrolled");
         } else{
            imageElement.classList.remove("scrolled");
         }
      }

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
   }, [])

  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
         <h1 className="text-5xl md:text-8xl lg:text-[80px] pb-6 gradient-title">
            Manage Your Finances <br /> With Intelligence <br /> Using Sakhi-Finance
         </h1> <br></br>
         <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            An AI-powered fintech platform that helps you with financial education, micro-investments, and secure banking with real-time insights in an accessible, user-friendly app.
           
         </p>
         <div className="flex justify-center space-x-4 ">
            <Link href="/dashboard">
               <Button size="lg" className="px-8">Get Started</Button>
            </Link>
            <Link href="/">
               <Button size="lg" variant="outline" className="px-8">Watch Demo</Button>
               {/* Changes Needed... */}
            </Link>
         </div>
         <div className="hero-image-wrapper">
            <div ref={imageRef} className="hero-image">
               <Image 
                  src="/banner.jpg"
                  alt="banner"
                  width={1280}
                  height={720}
                  priority
                  className="rounded-lg shadow-[0px_4px_15px_rgba(0,0,255,0.3)] mx-auto"
               />
            </div>
         </div>
      </div>
    </div>
  )
}

export default HeroSection