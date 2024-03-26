import { useState } from "react";
import styles from "./Media_studio.module.css";
import Image from "next/image";
import Link from "next/link";
import "../../app/globals.css";
//tableaux d'images-----------------------------------------------------
const imagesApocalyptic: ImageProps[] = [
  {
    url: "/images/apocalyptic/postApocalyptic_5.png",
    name: "Apocalyptic",
    ia: "Midjourney",
    date: "19-03-24",
    retouche: "non",
  },
  {
    url: "/images/apocalyptic/postApocalyptic_6.png",
    name: "Apocalyptic",
    ia: "Midjourney",
    date: "20-03-24",
    retouche: "non",
  },
  {
    url: "/images/apocalyptic/postApocalyptic_7.png",
    name: "Apocalyptic",
    ia: "Midjourney",
    date: "21-03-24",
    retouche: "non",
  },
];
const imagesSiderurgie: ImageProps[] = [
  {
    url: "/images/siderurgie/apocalyptic_still.png",
    name: "Siderurgie",
    ia: "Midjourney",
    date: "20-03-24",
    retouche: "non",
  },
  {
    url: "/images/siderurgie/post_apocalyptic_still_2_up.png",
    name: "Siderurgie",
    ia: "dall-e",
    date: "19-03-24",
    retouche: "non",
  },
];
const imagesNature: ImageProps[] = [
  {
    url: "/images/nature/abeille.jpg",
    name: "Nature",
    ia: "Midjourney",
    date: "20-03-24",
    retouche: "non",
  },
];
//Interface-----------------------------------------------------
interface ImageProps {
  name: string;
  url: string;
  ia: string;
  date: string;
  retouche: string;
}

export default function Media_studio() {
  const imagesDefault: ImageProps[] = [
    { url: "/images/decor_1.png", name: "", ia: "", date: "", retouche: "" },
  ];
  const [selectImage, setSelectImage] = useState<ImageProps>(imagesDefault[0]);
  const [theme, setTheme] = useState<string>("default");

  const handleClick = (image: string) => {
    const selectedImage = images.find((img) => img.url === image);
    if (selectedImage) {
      setSelectImage(selectedImage);
    }
  };

  //switch theme-----------------------------------------------------
  const changeTheme = (newTheme: string) => {
    setTheme(newTheme);
    switch (newTheme) {
      case "siderurgie":
        setSelectImage(imagesSiderurgie[0]);
        break;
      case "apocalyptic":
        setSelectImage(imagesApocalyptic[0]);
        break;
      case "nature":
        setSelectImage(imagesNature[0]);
        break;
      default:
        setSelectImage(imagesDefault[0]);
    }
  };
  //switch images-----------------------------------------------------
  let images: ImageProps[];
  switch (theme) {
    case "siderurgie":
      images = imagesSiderurgie;
      break;
    case "apocalyptic":
      images = imagesApocalyptic;
      break;
    case "nature":
      images = imagesNature;
      break;
    default:
      images = imagesDefault;
  }

  return (
    <div className="flex flex-col  text-white-steam-b ">
     {/* <h3 className="p-2">
        Serveur discord:
        <a
          href="https://discord.gg/d7Y64ZVrwU"
          className="text-blue-steam"
          target="blank"
          rel="noopener noreferrer"
        >
          {" "}
          PromptParadise
        </a>
      </h3>
      <h4 className="p-2 text-blue-steam">{`${selectImage.name} `}</h4>
      */}
      {/*container ------------------------------------------------- */}
      <div
        className={`${styles.container_media_studio} flex mb-12`}
      >
        {/* div de gauche--------------------------------------------*/}
        <div className="flex flex-col items-center justify-start p-2 w-1/6">
          <button
            onClick={() => changeTheme("siderurgie")}
            className="bg-gray-300 border-2 border-gray-400 mb-4 text-red-600"
          >
            <p className="p-1">Siderurgie</p>
          </button>

          <button
            onClick={() => changeTheme("apocalyptic")}
            className="bg-gray-300 border-2 border-gray-400 mb-4 text-red-600"
          >
            <p className="p-1">Apocalyptic</p>
          </button>
          <button
            onClick={() => changeTheme("nature")}
            className="bg-gray-300 border-2 border-gray-400 mb-4 text-red-600"
          >
            <p className="p-1">Nature</p>
          </button>
        </div>
        {/* div du milieu--------------------------------------------*/}
        <div
          className=" flex flex-col w-2/3"
        >
          <div className="">
            <img
              src={selectImage.url}
              alt="sky_game"
              width={1000}
              height={100}
              
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            {images.map((image) => (
              <img
                key={image.url}
                onClick={() => handleClick(image.url)}
                src={image.url}
                alt="decor"
                width={200}
                height={70}
                className="h-full object-cover"
              />
            ))}
          </div>
        </div>
        {/* div de droite--------------------------------------------*/}
        <div
          className="w-1/4 pl-2 pr-2 "
        >
          <h3 className="text-blue-steam mb-1 ">{selectImage.name}</h3>

          <Image
            src={selectImage.url}
            alt="medias-aside"
            width={400}
            height={400}
            className=""
          />
          <div className="p-1 text-text-steam">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
              itaque vel voluptas vitae quos deserunt nam sed exercitationem
              cum. Porro asperiores nihil, blanditiis quos libero sit.
              Consectetur ipsum atque ab?
            </p>
          </div>

          <div className="p-1 ">
            {/* ici midjourney dois etre remplacer par {} et du css  */}
            <div className="flex flex-row gap-2">
              <p className="text-gray-400">ia : </p>
              <p className="text-blue-steam ">{selectImage.ia}</p>
            </div>
            <div className=" flex flex-flex-row gap-2">
              <p className="text-gray-400">date :</p>
              <p className="text-blue-steam">{selectImage.date}</p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="text-gray-400">retouche :</p>
              <p className="text-blue-steam"> {selectImage.retouche}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
