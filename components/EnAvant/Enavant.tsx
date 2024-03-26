import Image from "next/image";
import "../../app/globals.css";
export default function EnAvant() {
  return (
    <div className="flex flex-col w-[700px]">
      <div className="mb-3"></div>
      <div className="flex flex-row justify-between">
        <div className=" p-2 w-[300px]">
          <h3>Abeille</h3>
          <p className="textePage">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo beatae
            aliquid fugiat error dicta expedita, doloremque optio omnis
            accusamus quas ducimus hic perferendis dolores sed quae repudiandae
            ex voluptate non.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/images/abeille.jpg"
            alt="Abeille"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
