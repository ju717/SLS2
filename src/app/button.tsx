import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Roboto } from "next/font/google";
import { useState } from "react"; // Importiere useState, um den Zustand des Schalters zu verfolgen

const roboto2 = Roboto({
    weight: "100",
    subsets: ["latin-ext"],
    style: "normal",
  });

export function ButtonSwitch() {
  // Zustand für den Schalter
  const [switchState, setSwitchState] = useState(false);

  // Funktion, die beim Klicken des Buttons aufgerufen wird
  const handleButtonClick = () => {
    // Ändere den Zustand des Schalters
    setSwitchState(!switchState);
    // Hier kannst du weitere Aktionen ausführen, die beim Klicken des Buttons erfolgen sollen
    console.log("Hallo Zustand geändert");
    if (switchState == true){
      console.log("Hallo Zustand aus");
    }
    else if (switchState == false){
      console.log("Hallo Zustand an");
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
