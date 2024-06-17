"use client";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Roboto } from "next/font/google";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useRouter } from "next/navigation";

// const pin = new Gpio(17, { mode: Gpio.OUTPUT });
// pin.digitalWrite(0);

const roboto2 = Roboto({
  weight: "100",
  subsets: ["latin-ext"],
  style: "normal",
});

const socket = io("http://localhost:3001");

export function ButtonSwitch() {
  const [akkustand, setAkkustand] = useState<number>(0);
  const router = useRouter();
  const [switchState, setSwitchState] = useState(false);

  useEffect(() => {
    socket.on("akkustand", (akkustand) => {
      setAkkustand(akkustand);
      console.log(akkustand);
      router.refresh();
    });
  }, []);

  useEffect(() => {
    const makeRequest = async () => {
      if (switchState && akkustand >= 80) {
        console.log("Making Request");
        try {
          const response = await fetch("http://localhost:5000/optimisiertesLaden");
          console.log(response);
        } catch (error) {
          console.error("Error making request:", error);
        }
      } else if (!switchState) {
        console.log("Hallo Zustand aus");
      }
    };

    makeRequest();
  }, [switchState, akkustand]);

  const handleButtonClick = () => {
    setSwitchState((prev) => !prev);
    console.log("Hallo Zustand geändert");
  };

  return (
    <div className={roboto2.className}>
     
      <div
        className="m-2 mt-10 h-12 w-80 justify-center rounded-md bg-opacity-85 bg-zinc-900 p-2 font-extrabold"
        onClick={handleButtonClick}
      >
        <Switch id="optimiertes-laden" checked={switchState} />
        <Label
          className="p-2 pl-7 text-center text-2xl text-[#747de6] pt-2 font-extrabold"
          htmlFor="optimiertes-laden"
        >
          Optimiertes Laden
        </Label>
      </div>
    </div>
  );
}