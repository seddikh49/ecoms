import React from 'react'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '../../../../@/components/ui/tooltip';
import { Github } from "lucide-react";
import { socialLinks } from '../../../../constants/index'

import Link from 'next/link'

const SocialMedia = () => {

    return (
        <TooltipProvider>
            <div className='flex gap-3 items-center pt-5'>
                {socialLinks?.map((social,index) => {
                    return (
                        <Tooltip key={index}>
                            <TooltipTrigger>
                                <Link target="_blank" href={social.href} className='flex items-center hover:text-white text-gray-400 hoverEffect justify-center w-10 h-10 p-2 border  rounded-full'>
                                    {social.icon}
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className={'bg-white hoverEffect  text-black font-semibold'}>{social.title}</TooltipContent>
                        </Tooltip>

                    )
                })}
            </div>
        </TooltipProvider>
    )
}

export default SocialMedia
