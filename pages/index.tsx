import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Affiche from "@/components/Affiche/Affiche";
import Affiche_sous from "@/components/Affiche_sous";
import "../app/globals.css";
import { getPlaiceholder } from "plaiceholder";
import { promises as fs } from "fs";
import EnAvant from "@/components/EnAvant/Enavant";

export async function getStaticProps() {
  const imageBuffer = await fs.readFile("./public/images/sky_game.png");
  const { base64 } = await getPlaiceholder(imageBuffer);
  return {
    props: {
      blurDataUrl: base64,
    },
  };
}

interface HomeProps {
  blurDataUrl: string;
}

export default function Home({ blurDataUrl }: HomeProps) {
  return (
    <div className="container-index">
      <div className="flex flex-row gap-1">
        <Affiche blurDataUrl={blurDataUrl} />
        <Affiche blurDataUrl={blurDataUrl} />
      </div>

      <div className="flex flex-row gap-1 mb-3">
        <Affiche_sous />
        <Affiche_sous />
        <Affiche_sous />
      </div>
      <h2 className="mb-2 p-2">Voici les Nouveautés</h2>
      <div className="flex flex-row justify-around items-center mb-4">
        <EnAvant />
        <EnAvant />
       
      </div>
    </div>
  );
}
{
  /* <div className="container-index flex flex-col items-center ">
<div className="container_affiche "><Affiche /></div>
  <div className="container_affiche "><Affiche_sous /></div>
</div> */
}
