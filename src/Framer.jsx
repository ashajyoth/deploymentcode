import React from 'react'
import {motion} from 'framer-motion';
import './Framer.css'
export default function Framer() {
  return (
    <>
    <div className="b">
    <motion.div animate = {{scale: 2, opacity: 1, borderRadius: "50%", transition:{duration: 1}}}className="d">

    </motion.div>
    <motion.h2 animate= {{color: "#111", fontSize: 80, }} className="d1">Welcome to the website</motion.h2>
    <motion.button whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} className='b1'>Select</motion.button>
    </div>
    </>
  )
}
