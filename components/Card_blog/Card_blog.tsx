import Image from "next/image";
import "../../app/globals.css";

export default function Card_blog() {
  return (
    <div style={{background:'#494f5b'}}className="flex flex-row  border border-gray-500 mb-5 gap-1 w-3/5 ">
      <div className="flex flex-col items-start p-2 ">
        <h5 style={{color:'#c6d4df'}} className="text-light text-blue-steam ">
          Photoshop Tutorial
        </h5>
        <h4 className="text-regular font-bold text-blue-steam">Game Update 7.4.1b</h4>
        <p style={{color:'#c6d4df'}} className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a sed
          distinctio perspiciatis temporibus blanditiis aspernatur nihil hic
          alias necessitatibus, odio at. Dolorem nulla modi voluptates magni
          explicabo incidunt eius.
        </p>
      </div>
      <div className="flex flex-none " style={{height:"150px", width:'400px', overflow:'hidden', margin:'10px 10px 10px 0px',position: 'relative'}}>
  <Image
    src="/images/decor_1.png"
    alt="decor_1"
    layout="fill"
    objectFit="cover"
  />
</div>
    </div>
  );
}
