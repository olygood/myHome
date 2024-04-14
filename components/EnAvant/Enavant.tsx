import Image from "next/image";
import "../../app/globals.css";

export default function EnAvant({
  title,
  article,
  imgUrl,
}: {
  title: string;
  article: string;
  imgUrl: string;
}) {

  const truncate = (input: string, numWords: number) => {
    return input.split(" ").splice(0,numWords).join(" ") + "..."+ "Lire la suite";
  }
  return (
    <div style={{ width:"750px",height:"240px"}} className="flex mb-10 border-2 border-red-700" >
        <div className="flex-1 overflow-hidden p-2">
          <h3>{title}</h3>
          <p>{truncate(article,46)}</p>
        </div>

      <div className="flex-1">
        <Image
          src={imgUrl}
          alt="ok"
          width={100}
          height={100}
          layout="responsive"
          objectFit="fill"
          className="min-w-full min-h-full"
        />
      </div>
    </div>
  
);
}       
      
      

        
