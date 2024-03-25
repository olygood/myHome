import { useState } from "react";
import styles from "./Media_studio.module.css";
import Image from "next/image";
import Link from "next/link";
import '../../app/globals.css';
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
    default:
      images = imagesDefault;
  }

  return (
    <div className="flex flex-col items-start justify-start bg-slate-800 text-white ">
      <h3 className="p-2">
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
      <h4 className="p-2">{`${selectImage.name} `}</h4>
      <div
        className={`${styles.container_media_studio} flex flex-row border-2 border-red-500 `}
      >
        <div className="flex flex-col items-center justify-start button-click h-full w-52 bg-slate-800 p-2 ">
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
        </div>

        <div
          className={`${styles.container_mediaStudio} flex flex-col border-2 border-gray-600 bg-gray-950`}
        >
          <div className="h-64 w-full ">
            <img
              src={selectImage.url}
              alt="sky_game"
              width={500}
              height={100}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-row items-center justify-center border-2 border-gray-600 gap-2">
            {images.map((image) => (
              <img
                key={image.url}
                onClick={() => handleClick(image.url)}
                src={image.url}
                alt="decor"
                width={140}
                height={70}
                className="h-full object-cover"
              />
            ))}
          </div>
        </div>
        <div
          className={`${styles.container_aside} flex flex-col justify-between bg-slate-800 border-2 border-gray-400 p-2`}
        >
          <h3 className="text-white mb-1 p-1">{selectImage.name}</h3>

          <Image
            src={selectImage.url}
            alt="medias-aside"
            width={300}
            height={400}
            className="object-cover max-h-[35%]"
          />
          <div className="p-2 text-text-steam">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
              itaque vel voluptas vitae quos deserunt nam sed exercitationem
              cum. Porro asperiores nihil, blanditiis quos libero sit.
              Consectetur ipsum atque ab?
            </p>
          </div>

          <div className="p-2 ">
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
