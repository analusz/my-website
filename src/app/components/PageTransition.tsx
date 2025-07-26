"use client";
import React from 'react'
import { motion } from "framer-motion";


const PageTransition = () => {
    return (
        <>
        <div>
            <motion.div
                className='fixed top-0 bottom-0 right-full h-screen w-screen z-30 bg-white dark:bg-black pointer-events-none'
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "100%" }}
                exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            />
            <motion.div
                className='fixed top-0 bottom-0 right-full h-screen w-screen z-20 bg-[#efaaba] pointer-events-none'
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "100%" }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
            <motion.div
                className='fixed top-0 bottom-0 right-full h-screen w-screen z-10 bg-[#ffedf1] pointer-events-none'
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "100%" }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
        </div>

        
        </>
    )
}

export default PageTransition;
