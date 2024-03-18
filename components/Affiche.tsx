import Image from "next/image";
import Back_info from "./Back_info";
import '../app/globals.css'
import {getPlaiceholder} from 'plaiceholder'

interface AfficheProps {
  blurDataUrl: string;
}

export default function Affiche({blurDataUrl} : AfficheProps) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col items-center  bg-slate-950">
        <h4 className="text-thin text-white p-2">
          How much was each Bitcoin worth in USD following each halving event
          since its creation?
        </h4>
        <Image layout="responsive" placeholder="blur"
          src="/images/sky_game.png"
          alt="decor"
          width={500}
          height={100}
          blurDataURL={blurDataUrl}
        />
        <Back_info />
      </div>
    </div>
  );
}
