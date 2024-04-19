"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Humidity_Sensor from "./akkustandAnzeige";
import { CarouselDemo } from "./carouselDemo";


export default function Home() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [
    'url("/background1.jpg")',
    'url("/background2.jpg")',
    'url("/background3.jpg")',
    'url("/background4.jpg")',
    'url("/background5.jpg")',
    'url("/background6.jpg")',
    'url("/background7.jpg")',
    'url("/background8.jpg")',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex(prevIndex => (prevIndex + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="px-20" style={{
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundImage: backgrounds[backgroundIndex],
      }}><CarouselDemo/></div>
    
    </>
  );


}

