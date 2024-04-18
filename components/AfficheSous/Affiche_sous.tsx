import Image from "next/image";
import '../../app/globals.css'
import Back_info from "../BackInfo/Back_info";

export default function Affiche_sous() {
  return (
    <div className="flex flex-row bg-slate-950  gap-1 mb-1">
      <div className="flex flex-col bg-slate-950 ">
        <h4 className="text-thin text-white p-2 ">
          How much was each Bitcoin worth in USD following each halving event
          since its creation?
        </h4>
        <div
          className="w-full h-32 bg-center bg-cover"
          style={{ backgroundImage: "url('/images/decor_1.png')" }}
        ></div>
        <Back_info />
      </div>
    </div>
  );
}
