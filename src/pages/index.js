import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "./Navbar"
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

export default function Home() {
  return (
    <div>
       <Navbar/>
       <Page1/>
       <Page2/>
      
    </div>
  );
}
