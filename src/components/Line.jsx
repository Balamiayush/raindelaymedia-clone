import React from 'react'
import { motion } from 'framer-motion';
const Line = () => {
  return (
    <motion.div 
    className="line h-[5px] bg-[#19191B]"
    initial={{ width: "0%" }} 
    animate={{ width: "100%" }} 
    transition={{ duration: 1, ease: "easeInOut",delay:2 }}
  ></motion.div>

  )
}

export default Line