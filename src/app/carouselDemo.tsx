import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Akkustand_Sensor from "./akkustandAnzeige"

export function CarouselDemo() {
  return (
    <Carousel className="w-full h-screen">
      <CarouselContent>
          <CarouselItem >
                  <div className="flex w-full h-full"><Akkustand_Sensor/></div>
          </CarouselItem>
          <CarouselItem >
            <div className="w-full h-screen flex">
          <iframe src="https://embed.styledcalendar.com/#lopWMQDUpqnYNSMaigA9" title="Styled Calendar" className= "w-full h-full" data-cy="calendar-embed-iframe"></iframe>
          <script async type="module" src="https://embed.styledcalendar.com/assets/parent-window.js"></script>
          </div>
          </CarouselItem>
   
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
