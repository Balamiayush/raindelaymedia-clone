import React, { useEffect, useState } from "react";
import gsap from "gsap";
import logo from '../assets/logo.svg'
const Loading = () => {
  const [boxes, setBoxes] = useState(Array.from({ length: 5 })); // Create an array with 5 elements

  useEffect(() => {
    let tl = gsap.timeline();

    tl.to(".line", {
      width: "-0%",
      duration: 2.5, // Slower animation for a smooth effect
      ease: "power4.out",
    })
      .to(
        ".box",
        {
          y: 0,
          height: 0,
          duration: 0.8,
          stagger: {
            amount: 0.5, // Total stagger duration
            from: "start", // Start animation from the last element
          },
          
        },
        "-=1" // Starts slightly before the line disappears completely
      )
      .to(
        ".preloader-mark",
        {
          opacity: 0,
          ease: "power2.out",
        },
        "1" // Starts fading slightly before the boxes finish
      );
      tl.to(".loader",{
      display:"none",
      })
  }, []);

  return (
    <div className="w-full  z-50 overflow-hidden loader h-screen flex fixed top-0 left-0   ">
      {boxes.map((_, index) => (
        <div key={index} className="box w-[20%] h-full bg-blue-500"></div>
      ))}
      <h1 className="preloader-mark text-[8rem] font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <img src={logo} alt="logo" className="w-full h-full" />
      </h1>
    </div>
  );
};

export default Loading;