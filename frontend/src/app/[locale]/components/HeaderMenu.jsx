'use client';

import React from 'react'
import Link from 'next/link';
import { navLinks } from '../../../../constants/index'
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';


const HeaderMenu = () => {
    const t = useTranslations('links')
    const pathname = usePathname();
    const currentPath = `/${pathname.split('/').slice(2).join('/')}`; // تخطي جزء اللغة
    console.log(currentPath)
    console.log(pathname)



    return (
        <div className='w-1/3 xm:hidden sm:hidden md:hidden xl:inline-flex '>
            <nav className={`xl:inline-flex  font-semibold text-sm   items-center md:hidden lg:flex xm:hidden sm:hidden gap-5 capitalize    `}     >
                {navLinks.map((link) => (
                    <Link
                        key={t(`${link}.href`)}
                        href={t(`${link}.href`)}
                        className={`hover:text-black group relative transition-all duration-200 ease-in-out cursor-pointer  ${currentPath === t(`${link}.href`) ? "text-black" : "text-gray-600"}`}
                    //   className={`font-bold xl:text-lg lg:text-sm transition hover:text-orange-500 ${currentPath === t(`${link}.href`) ? "text-orange-500" : "text-gray-600" } `}
                    >
                        {t(`${link}.label`)}
                        <span className={`absolute w-0 h-[2px] group-hover:w-1/2 origin-right transition-all duration-200 ease-in-out left-0  -bottom-1 bg-black ${currentPath === t(`${link}.href`) ? "w-1/2" : "w-0"}`}></span>
                        <span className={`absolute w-0 h-[2px] group-hover:w-1/2 origin-right transition-all duration-200 ease-in-out right-0  -bottom-1 bg-black ${currentPath === t(`${link}.href`) ? "w-1/2" : "w-0"}`}></span>
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export default HeaderMenu
