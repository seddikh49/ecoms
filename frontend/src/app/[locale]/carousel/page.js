"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "../../../../@/components/ui/card"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../@/components/ui/carousel"

export default function CarouselSize() {

  return (
    // <Carousel
    // plugins={[
    //   Autoplay({
    //     delay:3000
    //   })
    // ]}
    //   opts={{
    //     align: "start",      
    //   }}
    //   className="w-full "
    // >
    //   <CarouselContent>
    //     {Array.from({ length: 5 }).map((_, index) => (
    //       <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
    //         <div className="p-1">
    //           <Card>
    //             <CardContent className="flex aspect-square items-center justify-center p-6">
    //               <span className="text-3xl font-semibold">{index + 1}</span>
    //             </CardContent>
    //           </Card>
    //         </div>
    //       </CarouselItem>
    //     ))}
    //   </CarouselContent>
    //   <CarouselPrevious />
    //   <CarouselNext />
    // </Carousel>
      <Carousel
      plugins={[
      Autoplay({
        delay:3000
      })
    ]}
      className="w-full ">
      <CarouselContent className={""}>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="">
            <div className="p-1  ">
              <Card className={'h-96'}>
                <CardContent className="flex aspect-square items-center justify-center p-6 h-full">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
