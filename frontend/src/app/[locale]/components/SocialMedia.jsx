import React from 'react'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '../../../../@/components/ui/tooltip';
import { Github } from "lucide-react";
import { socialLinks } from '../../../../constants/index'

import Link from 'next/link'

const SocialMedia = () => {

    return (
        <TooltipProvider>
            <div className='flex gap-3 items-center pt-2 '>
                {socialLinks?.map((social,index) => {
                    return (
                        <Tooltip key={index}>
                            <TooltipTrigger>
                                <Link target="_blank" href={social.href} className='flex items-center  text-gray-600 hover:text-black bg-white hoverEffect justify-center w-10 h-10 p-2 border  rounded-full'>
                                    {social.icon}
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className={''}>{social.title}</TooltipContent>
                        </Tooltip>
                    )
                })}
            </div>
        </TooltipProvider>
    )
}

export default SocialMedia
