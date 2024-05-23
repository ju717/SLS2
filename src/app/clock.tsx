import React, { useState, useEffect } from 'react';
import { Roboto } from "next/font/google";


const roboto2 = Roboto({
  weight: "100",
  subsets: ["latin-ext"],
  style: "normal",
});

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="flex justify-center items-center m-2 mt-10 h-36 w-80 rounded-md bg-zinc-900 bg-opacity-85 p-2">
      <div className={roboto2.className}>
        <div className="text-center text-5xl font-extrabold text-[#747de6]">{formattedTime}</div>
      </div>
    </div>
  );
};

export default DigitalClock;
