"use client";
import React, { useEffect, useState } from "react";
import { Roboto } from "next/font/google";
import io from "socket.io-client";
import { useRouter } from "next/navigation";

const roboto2 = Roboto({
  weight: "100",
  subsets: ["latin-ext"],
  style: "normal",
});

const socket = io("http://localhost:3001");

export default function Akkustand_Sensor() {
  const [akkustand, setAkkustand] = useState(0);
  const router = useRouter();

  useEffect(() => {
    socket.on("akkustand", (akkustand) => {
      setAkkustand(akkustand);
      console.log(akkustand);
      router.refresh();
    });
  }, []);

  return (
    <div className="m-2 h-36 w-80 justify-center rounded-md bg-zinc-900 font-extrabold bg-opacity-85 p-2">
      <div className={roboto2.className}>
        <div className="pt-5 text-center text-2xl font-extrabold text-[#747de6]">Akkustand</div>
        <div className="p-2 text-center text-5xl font-extrabold text-[#747de6]">
          {akkustand}%
        </div>
      </div>
    </div>
  );
}