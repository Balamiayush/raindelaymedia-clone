import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    open: {
      top: "0%",
    },
    closed: {
      top: "-90%",

    },
  };


  return (
    <div className="w-full flex items-center justify-between px-5 py-2 relative">
      
      {/* Fullscreen menu overlay */}
      <motion.div

        variants={variants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="fixed top-0 left-0 w-full h-[90vh] rounded-b-[20px]   flex items-center justify-center bg-blue-500"
      >
      {/* Menu button */}
      <motion.div


        onClick={handleOpen}
        className={`w-40 h-10 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-[20px] flex 
            top-[100%]
            items-center justify-center bg-blue-500 cursor-pointer ${isOpen ? "bg-red-500 bottom-[100%] " : "bg-blue-500 "}`}
        >
        <AiOutlineMenu className="text-white text-3xl" />


      </motion.div>
          </motion.div>


      {/* Logo */}
      <div className="logo w-20">
        <img src={logo} alt="logo" />
      </div>

    </div>
  );
};

export default Nav;
