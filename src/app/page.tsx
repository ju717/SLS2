import Image from "next/image";
import Humidity_Sensor from "./akkustandAnzeige";
import { CarouselDemo } from "./carouselDemo";

export default function Home() {
  return (
    <>
      <div className="px-20"><CarouselDemo/></div>
    </>
  );
}
