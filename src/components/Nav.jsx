import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";
import Button from "./Button";
import { MdClose } from "react-icons/md";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    open: {
      top: ["-90%", "80%", "0%"],
    },
    closed: {
      top: ["-90%", "-80%", "-90%"],
    },
  };

  return (
    <div className="    flex items-center  justify-between relative  ">
      <motion.div
        variants={variants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
        className="fixed top-0 navbar  w-full   h-[90vh] rounded-b-[20px]   flex items-center justify-center bg-blue-500 z-50 "
      >
        <ul className="flex flex-col items-center justify-center gap-5 text-white text-[5rem] leading-[1.2] font-bold ">
          <div className="flex items-center justify-center mainli flex-col relative overflow-hidden    ">
            <li className="cursor-pointer transition-all duration-500 ease-in-out  a1    w-full  overflow-hidden  ">
              Shows
            </li>
            <li className="cursor-pointer a2  ">Shows</li>
          </div>
          <div className="flex items-center justify-center mainli flex-col relative overflow-hidden    ">
            <li className="cursor-pointer transition-all duration-500 ease-in-out  a1    w-full  overflow-hidden  ">
              Services
            </li>
            <li className="cursor-pointer a2  ">Services</li>
          </div>
          <div className="flex items-center justify-center mainli flex-col relative overflow-hidden    ">
            <li className="cursor-pointer transition-all duration-500 ease-in-out  a1    w-full  overflow-hidden  ">
              Advantages
            </li>
            <li className="cursor-pointer a2  ">Advantages</li>
          </div>
          <div className="flex items-center justify-center mainli flex-col relative overflow-hidden    ">
            <li className="cursor-pointer transition-all duration-500 ease-in-out  a1    w-full  overflow-hidden  ">
              Careers
            </li>
            <li className="cursor-pointer a2  ">Careers</li>
          </div>
        </ul>
        <motion.div
          onClick={handleOpen}
          className={`w-40  h-15 absolute  menubar top-0 left-1/2  -translate-x-1/2 rounded-b-[20px] flex 
            top-[100%]
            items-center justify-center bg-blue-500 cursor-pointer
             ${
              isOpen ? (
                <MdClose className="text-white text-3xl" />
              ) : (
                <AiOutlineMenu className="text-white text-3xl" />
              )
            }`}
        >
          {isOpen ? (
            <MdClose className="text-white text-3xl" />
          ) : (
            <AiOutlineMenu className="text-white text-3xl" />
          )}
        </motion.div>
      </motion.div>

      {/* Logo */}
      <div className="w-full px-10 py-5 flex items-center justify-between gap-5 navbar-container">
        <div className="logo w-20">
          <img src={logo} alt="logo" />
        </div>
        <div className="button uppercase">
          <Button text="Get IN Touch." />
        </div>
      </div>
    </div>
  );
};

export default Nav;
