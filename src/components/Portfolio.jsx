import React from 'react'
import image1 from '../assets/p-1.png'
import image2 from '../assets/p-2.png'
import image3 from '../assets/p-3.png'
import image4 from '../assets/p-4.png'
import image5 from '../assets/p-5.png'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Portfolio = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
      });
  return (
    <div id='portfolio'>
        <div>
            
            <div className=' bg-gray-900'>
            <h2 className='titleBackground border border-b-[#00df9a] w-fit border-t-0 border-l-0 border-r-0'>PORTFOLIO</h2>
            <h1 className=' text-white mt-10 text-2xl flex justify-center font-bold'>MY PROJECTS</h1>
            <div className='grid w-full sm:grid-cols-2 md:grid-cols-3 gap-10 px-10 sm:px-10 py-10'>
                <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                transition={{ duration: 1}}
                className=' bg-gray-100 h-full rounded-xl shadow-sm shadow-[#00df9a]'>
                  <img className='rounded-xl' src={image1} alt="" />
                  <h1 className=' text-black px-4 pt-2 flex justify-center text-xl font-semibold'>RELIEF+</h1>
                  <p className=' text-black py-2 px-4'>Blockchain Website that works even in war-hit areas where the problems are numerous but solution is RELIEF+!</p>
                </motion.div>

                <motion.div
                ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
        transition={{ duration: 1 ,delay:0.5 }}
                className=' bg-gray-100 h-full rounded-xl shadow-sm shadow-[#00df9a]'>
                  <img className='rounded-xl' src={image2} alt="" />
                  <h1 className=' text-black px-4 pt-2 flex justify-center text-xl font-semibold'>DESIGN SOL</h1>
                  <p className=' text-black py-2 px-4'>Blockchain Website that works even in war-hit areas where the problems are numerous but solution is RELIEF+!</p>
                </motion.div>


                <motion.div
                ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
        transition={{ duration: 1,delay:1 }}
                className=' bg-gray-100 h-full rounded-xl shadow-sm shadow-[#00df9a]'>
                  <img className='rounded-xl' src={image3} alt="" />
                  <h1 className=' text-black px-4 pt-2 flex justify-center text-xl font-semibold'>E-COMMERCE</h1>
                  <p className=' text-black py-2 px-4'>Blockchain Website that works even in war-hit areas where the problems are numerous but solution is RELIEF+!</p>
                </motion.div>


                <motion.div
                ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
        transition={{ duration: 1,delay:1.5 }}
                className=' bg-gray-100 h-full rounded-xl shadow-sm shadow-[#00df9a]'>
                  <img className='rounded-xl' src={image4} alt="" />
                  <h1 className=' text-black px-4 pt-2 flex justify-center text-xl font-semibold'>BANKMANIA</h1>
                  <p className=' text-black py-2 px-4'>Blockchain Website that works even in war-hit areas where the problems are numerous but solution is RELIEF+!</p>
                </motion.div>


                <motion.div
                ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
        transition={{ duration: 1,delay:2 }}
                className=' bg-gray-100 h-full rounded-xl shadow-sm shadow-[#00df9a]'>
                  <img className='rounded-xl' src={image5} alt="" />
                  <h1 className=' text-black px-4 pt-2 flex justify-center text-xl font-semibold'>UNITY LEARN</h1>
                  <p className=' text-black py-2 px-4'>Blockchain Website that works even in war-hit areas where the problems are numerous but solution is RELIEF+!</p>
                </motion.div>


                <motion.div
                ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
        transition={{ duration: 1,delay:2.5 }}
                className=' bg-gray-100 h-full rounded-xl shadow-sm shadow-[#00df9a]'>
                  <img className='rounded-xl' src={image4} alt="" />
                  <h1 className=' text-black px-4 pt-2 flex justify-center text-xl font-bold'>RELIEF+</h1>
                  <p className=' text-black py-2 px-4'>Blockchain Website that works even in war-hit areas where the problems are numerous but solution is RELIEF+!</p>
                </motion.div>

            </div>
            </div>
        </div>
        <hr />
        <br />
    </div>
  )
}

export default Portfolio