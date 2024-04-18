import Tuiles_games from "../../components/Tuiles_games/Tuiles_games";
import React, { FC } from "react";
import Link from "next/link";
import styles from "./devtools.module.css";

type TuilesNamesType = {
  name: string;
  img: string;
};

const TuilesNames: TuilesNamesType[] = [
  {
    name: "Components Web ",
    img: "/images/sky_game.png",
  },
  {
    name: "Assets/UI",
    img: "/images/tuiles_game/assetsSprites.png",
  },
  {
    name: "Card ",
    img: "/images/sky_game.png",
  },
  {
    name: "Skills",
    img: "/images/tuiles_game/assetsSprites.png",
  },
];

export default function Game() {
  return (
    <div className="container_game">
<div className="flex flex-col sm:flex-row min-h-60 ">
<div className="w-full sm:w-1/2 text-center relative">
    <h1 className="font-bold">Bienvenu dans l'univers du Web</h1>
    <h2 className="font-bold">React/NextJs</h2>

    <p>voici mes composants que j'ai créer et prêt à l'emploi</p>
    <div className={`absolute w-full h-full bottom-0 ${styles.clipPathDiv}`} />
  </div>
  <div className="w-full sm:w-1/2">
    <img
      className="w-full h-full object-cover"
      src="/images/bggame.png"
      alt="game"
    />
  </div>
</div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2 ">
        {TuilesNames.map((tuile: TuilesNamesType, index: number) => (
          <div className="h-44">
            <Link href={`/game/${tuile.name.replace(/\s/g, "").toLowerCase()}`}>
              <Tuiles_games key={index} name={tuile.name} img={tuile.img} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
