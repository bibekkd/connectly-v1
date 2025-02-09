"use client"
import Navbar from "@/components/navbar";
import { OrbitingCirclesDemo } from "./sections/Hero";
import { AnimatedListDemo } from "./sections/Notifications";
import AnimatedBeamMultipleOutputDemo from "@/components/animated-beam-multiple-inputs";
import Iphone15ProDemo from "@/components/iphone-15-pro-demo-2";
import { Preview } from "./sections/gravityDemo";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Navbar/>
      <OrbitingCirclesDemo/>
      <AnimatedListDemo/> 
      <AnimatedBeamMultipleOutputDemo/>   
    </div>
  );
}
