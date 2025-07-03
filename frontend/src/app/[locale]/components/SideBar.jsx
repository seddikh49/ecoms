import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ImCross } from "react-icons/im";
import Link from 'next/link';
// import { navLinks } from '../../../../constants/index'
import { navLinks } from '../../../../constants/index'
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import SocialMedia from './SocialMedia'
import { useRef } from 'react';






const SideBar = ({ isOpen, onClose }) => {
    const blackDev = useRef()
    const t = useTranslations('links')
    const pathname = usePathname();
    const currentPath = `/${pathname.split('/').slice(2).join('/')}`; // تخطي جزء اللغة
    

    useEffect(() => {
        const handleOutsideClick  = (e) => {
              if(blackDev.current && !blackDev.current.contains(e.target)){
                  onClose()
              }
        }
        document.addEventListener('mousedown', handleOutsideClick )
        return () => {
             document.removeEventListener('mousedown',handleOutsideClick )
        };
    }, []);



   

    return (
        <div className={`fixed inset-y-0 left-0 z-50 bg-black/50 shadow-xl ${!isOpen && '-translate-x-full'} xl:hidden  hoverEffect w-full`}>

            <motion.div
                ref={blackDev}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }} className='min-w-72 max-w-96 bg-black origin-left text-white border-r p-10 h-full flex flex-col fap-6'>
                <div className='flex justify-between items-center' >
                    <Link href={'/'} onClick={onClose} className='text-white font-bold text-xl'>KAMSED</Link>
                    <button onClick={onClose} className={'hover:text-red-400 hoverEffect'}>
                        <ImCross className='' />
                    </button>
                </div>

                <nav className={`capitalize flex pt-5 flex-col gap-4 text-base font-semibold tracking-wide    `}     >
                    {navLinks.map((link) => (
                        <Link
                            onClick={onClose}
                            key={t(`${link}.href`)}
                            href={t(`${link}.href`)}
                            className={`hover:text-white  group relative hoverEffect whitespace-nowrap  ${currentPath === t(`${link}.href`) ? "text-white" : "text-gray-400"}`}
                        >
                            {t(`${link}.label`)}
                        </Link>
                    ))}
                </nav>
                <SocialMedia />

            </motion.div>


        </div>
    )
}

export default SideBar
