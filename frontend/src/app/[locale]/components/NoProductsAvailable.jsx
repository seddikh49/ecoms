import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import React from 'react'


const NoProductsAvailable = ({ selectedCategory }) => {
    return (
        <div className=' flex flex-col py-10 justify-center items-center min-h-80 text-center bg-gray-100 w-full rounded-md mt-10 '>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <p className='text-2xl font-bold text-gray-800'>No Products Available</p>
            </motion.div>
            <motion.p className='text-gray-600'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{delay:0.4, duration: 0.5 }}
            >
                We&apos;re sorry ,but there are no products matching on {" "}
                <span className='font-semibold text-base text-black'>
                    {selectedCategory}
                </span>
                {" "}
                at the moment.
            </motion.p>
            <motion.div className='flex items-center space-x-2 text-blue-600'
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            >
                <Loader2 className='w-4 h-4  text-blue-800   animate-spin' /> <span>We&apos;re restocking shortly</span>
            </motion.div>
            <motion.p className='text-gray-600'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{delay:0.4, duration: 0.5 }}
            >
                Please check back later or explore our other porduct categories
            </motion.p>
        </div>
    )
}

export default NoProductsAvailable
