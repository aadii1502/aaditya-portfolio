import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Resume = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
      });
  return (
    <div id='resume'>
        <div>
           <div className=' mt-10'>
            <h2 className='titleBackground border border-b-[#00df9a] w-fit border-t-0 border-l-0 border-r-0'>RESUME</h2>
            <h1 className=' text-black mt-10 text-2xl flex justify-center font-bold'>MY SKILLS</h1>
            <div className="w-fit grid grid-cols-2 sm:grid-cols-3 gap-16 text-center py-8 px-12 sm:px-0 mx-auto">

                <motion.div 
                ref={ref}
                initial={{ opacity: 0,scale:0.8}}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                transition={{duration:1}}
                className='shadow-md bg-black px-4 shadow-orange-400 w-fit hover:scale-105 duration-500 py-3 rounded-lg'>
                    <img className=' h-[20vh] flex justify-center items-center' src={html} alt="" />
                </motion.div>

                <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                transition={{duration:1,delay:0.2}}
                className='shadow-md bg-black px-4 shadow-blue-400 w-fit hover:scale-105 duration-500 py-3 rounded-lg'>
                    <img className=' h-[20vh] flex justify-center items-center' src={css} alt="" />
                </motion.div>

                <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                transition={{duration:1,delay:0.4}}
                className='shadow-md bg-black px-4 shadow-yellow-400 w-fit hover:scale-105 duration-500 py-3 rounded-lg'>
                    <img className=' h-[20vh] flex justify-center items-center' src={javascript} alt="" />
                </motion.div>

                <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                transition={{duration:1,delay:0.6}}
                className='shadow-md bg-black px-4 shadow-blue-800 w-fit hover:scale-105 duration-500 py-3 rounded-lg'>
                    <img className=' h-[20vh] flex justify-center items-center' src={reactImage} alt="" />
                </motion.div>

                <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                transition={{duration:1,delay:0.8}}
                className='shadow-md bg-black px-4 shadow-sky-400 w-fit hover:scale-105 duration-500 py-3 rounded-lg'>
                    <img className=' h-[20vh] flex justify-center items-center' src={tailwind} alt="" />
                </motion.div>

                <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                transition={{duration:1,delay:1}}
                className='shadow-md bg-black px-4 shadow-gray-600 w-fit hover:scale-105 duration-500 py-3 rounded-lg'>
                    <img className=' h-[20vh] flex justify-center items-center' src={github} alt="" />
                </motion.div>

            </div>
            </div>
        </div>
        <div className='flex justify-center'>
         <button className=' border px-4 rounded-2xl py-1 bg-[#00df9a] text-white'>Download CV</button>
        </div>
        <br />
        <hr />
    </div>
  )
}

export default Resume