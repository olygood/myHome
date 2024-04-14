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
    url: "/images/siderurgie/outdoor_1.png",
    name: "Siderurgie",
    ia: "Midjourney",
    date: "20-03-24",
    retouche: "non",
  },
  {
    url: "/images/siderurgie/indoor_1.png",
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
const imagesDefault: ImageProps[] = [
  { 
    url: "/images/splatch1.png", 
    name: "olygood",
    ia: "",
    date: "",
    retouche: "photoshop" 
  }
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
   
    
    
      <div className="flex justify-around items-start border-2 border-blue-600 min-h-screen p-2">
        {/* div de gauche--------------------------------------------*/}
        <div className="w-1/12 flex flex-col items-center justify-start p-2">
          <button
            onClick={() => changeTheme("siderurgie")}
            className="rounded-lg bg-blue-steam border-2 border-gray-400 mb-4 hover:text-2xl"
          >
            <p className="text-regular text-slate-950 p-1">Siderurgie</p>
          </button>

          <button
            onClick={() => changeTheme("apocalyptic")}
            className="rounded-lg bg-blue-steam border-2 border-gray-400 mb-4 hover:text-2xl "
          >
            <p className="text-regular text-slate-950 p-1">Apocalyptic</p>
          </button>
          <button
            onClick={() => changeTheme("nature")}
            className="rounded-lg bg-blue-steam border-2 border-gray-400 mb-4 hover:text-2xl"
          >
            <p className="text-regular text-slate-950 p-1">Nature</p>
          </button>
        </div>
        {/* div du milieu--------------------------------------------*/}
        <div className="w-7/12 flex flex-col">
          {/* image du dessus*/}
          <div className="w-full h-[600px] mb-1">
            <img
              src={selectImage.url}
              alt="all_images"
              className="w-full h-full object-scale-down"
            />
              
          </div>
          {/* images du dessous*/}
          <div className="flex flex-row items-center justify-center gap-2">
            {images.map((image) => (
              <img
                key={image.url}
                onClick={() => handleClick(image.url)}
                src={image.url}
                alt="decor"
                width={200}
                height={70}
                className="h-full object-cover object-center"
              />
            ))}
          </div>
        </div>
        {/* div de droite--------------------------------------------*/}
        <div className="w-1/4 pl-2 pr-2 ">
          <h3 className="text-blue-steam mb-1 ">{selectImage.name}</h3>

          <Image
            src={selectImage.url}
            alt="medias-aside"
            width={400}
            height={400}
            className="object-cover"
          />
          <div className="p-1 text-text-steam">
            <p className="text-white-steam-b">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
              itaque vel voluptas vitae quos deserunt nam sed exercitationem
              cum. Porro asperiores nihil, blanditiis quos libero sit.
              Consectetur ipsum atque ab?
            </p>
          </div>

          <div className="p-1 ">
            {/* ici midjourney dois etre remplacer par {} et du css  */}
            <div className="flex flex-row gap-2">
              <p className="text-white-steam-a">ia : </p>
              <p className="text-blue-steam ">{selectImage.ia}</p>
            </div>
            <div className=" flex flex-flex-row gap-2">
              <p className="text-white-steam-a">date :</p>
              <p className="text-blue-steam">{selectImage.date}</p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="text-white-steam-a">retouche :</p>
              <p className="text-blue-steam"> {selectImage.retouche}</p>
            </div>
          </div>
        </div>
      </div>
    
  );
}
