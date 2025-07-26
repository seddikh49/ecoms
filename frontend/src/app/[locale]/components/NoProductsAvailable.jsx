
'use client'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import React from 'react'
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';


const NoProductsAvailable = ({ selectedCategory }) => {
    const a = useTranslations('availability')
    return (
        <div className=' flex flex-col gap-1 py-10 justify-center items-center min-h-80 text-center bg-gray-100 w-full rounded-md mt-10 '>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <p className='text-2xl font-bold text-gray-800'>{a(`available`)}</p>
            </motion.div>
            <motion.p className='text-gray-600'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{delay:0.4, duration: 0.5 }}
            >
                {a(`sorry`)}
                <span className='font-semibold text-base text-black'>
                    "{selectedCategory}"
                </span>
               
                
            </motion.p>
            <motion.div className='flex items-center space-x-2 text-blue-600'
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            >
                <Loader2 className='w-4 h-4  text-blue-800   animate-spin' /> <span> {a(`restock`)}</span>
            </motion.div>
            <motion.p className='text-gray-600'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{delay:0.4, duration: 0.5 }}
            >
               {a(`backlater`)}
            </motion.p>
        </div>
    )
}

export default NoProductsAvailable
