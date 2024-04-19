import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Roboto } from "next/font/google";

const roboto2 = Roboto({
    weight: "100",
    subsets: ["latin-ext"],
    style: "normal",
  });

export function ButtonSwitch() {
  return (
    <div className={roboto2.className}>
    <div className=" m-2 mt-10 h-12 w-80 justify-center rounded-md  bg-opacity-85 bg-zinc-900 p-2 font-extrabold">
      <Switch id="optimiertes-laden" />
      <Label className="p-2 pl-7 text-center text-2xl text-[#747de6] pt-2 font-extrabold" htmlFor="optimiertes-laden">Optimiertes Laden</Label>
    </div>
    </div>
  )
}
