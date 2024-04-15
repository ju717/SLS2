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
          <CarouselItem >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2716.3209826460047!2d15.400210776775966!3d47.09277782331738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476e344b367fde5d%3A0xfc357c118d3051f7!2sH%C3%B6here%20Technische%20Bundeslehranstalt%20(HTL)%20Graz-G%C3%B6sting!5e0!3m2!1sde!2sat!4v1706190074713!5m2!1sde!2sat"
            width="800"
            height="200"
            loading="lazy"
          ></iframe>
        <iframe src="https://www.wetter.de/widget/3tage/u26gz2cz/false/">
        </iframe>

          </CarouselItem>
   
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
