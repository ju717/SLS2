"use client";
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Roboto } from "next/font/google";
import { useEffect, useState } from "react"; // Importiere useState, um den Zustand des Schalters zu verfolgen
import { io } from "socket.io-client";
import { useRouter } from "next/navigation";
import akkustandAnzeige from "./akkustandAnzeige";

const pin = new Gpio(17, {mode: Gpio.OUTPUT});
pin.digitalWrite(0);

const roboto2 = Roboto({
    weight: "100",
    subsets: ["latin-ext"],
    style: "normal",
  });

const socket = io("http://localhost:3001");

export function ButtonSwitch() {
  const [akkustand, setAkkustand] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    socket.on("akkustand", (akkustand) => {
      setAkkustand(akkustand);
      console.log(akkustand);
      router.refresh();
    });
  }, []);
  // Zustand für den Schalter
  const [switchState, setSwitchState] = useState(false);
  let n:number = 80;

  // Funktion, die beim Klicken des Buttons aufgerufen wird
  const handleButtonClick = () => {
    // Ändere den Zustand des Schalters
    setSwitchState(!switchState);
    // Hier kannst du weitere Aktionen ausführen, die beim Klicken des Buttons erfolgen sollen
    console.log("Hallo Zustand geändert");
    if (switchState == false){
      console.log("Hallo Zustand an");
      if(akkustand >= n){
        console.log("Akkustand über 80");
        pin.digitalWrite(1);
      }
      else{
        pin.digitalWrite(0);
        console.log("Akkustand unter 80");
      }
    }
    else if (switchState == true){
      console.log("Hallo Zustand aus");
      pin.digitalWrite(0);
      //wenn akkustand 80 ausscahlten
    }
  }

  return (
    <div className={roboto2.className}>
    {/* Der Button */}
    <div className=" m-2 mt-10 h-12 w-80 justify-center rounded-md  bg-opacity-85 bg-zinc-900 p-2 font-extrabold" onClick={handleButtonClick}>
      <Switch id="optimiertes-laden" checked={switchState} /> {/* Verwende den Zustand des Schalters */}
      <Label className="p-2 pl-7 text-center text-2xl text-[#747de6] pt-2 font-extrabold" htmlFor="optimiertes-laden">Optimiertes Laden</Label>
    </div>
    </div>
  )
}
