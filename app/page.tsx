import Navbar from "@/components/navbar";
import { OrbitingCirclesDemo } from "./sections/Hero";
import { AnimatedListDemo } from "./sections/Notifications";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Navbar/>
      <OrbitingCirclesDemo/>
      <AnimatedListDemo/>    
    </div>
  );
}
