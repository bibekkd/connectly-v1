"use client"
import Navbar from "@/components/navbar";
import { OrbitingCirclesDemo } from "./sections/Hero";
import { AnimatedListDemo } from "./sections/Notifications";
import AnimatedBeamMultipleOutputDemo from "@/components/animated-beam-multiple-inputs";
import Heading from "@/components/Heading";
import { BentoDemo } from "./sections/Features";
import { TestimonialsDemo } from "./sections/Testimonial";
import SubHeading from "@/components/SubHeading";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Navbar/>
      <OrbitingCirclesDemo/>
      <AnimatedListDemo/> 
      <Heading title="Unified as One." addedClassName="tracking-tighter font-semibold"/>
      <AnimatedBeamMultipleOutputDemo/>
      <div className="md:my-20">
        <SubHeading title="Everything You Need in One Place"/>
        <BentoDemo/>
      </div>
      <TestimonialsDemo/>
    </div>
  );
}
