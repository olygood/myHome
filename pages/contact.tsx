import Image from "next/image";
import "../app/globals.css";
// import "../components/components_style.css";

export default function Contact() {
  return (
    <div className="flex flex-row justify-around mt-5 mb-2">
      <div className="flex flex-col gap-1">
        <div className="bg-gray-200">
          <h2 className="text-3xl">Olivier huttmacher</h2>
          <p>@olygood</p>
          <p>Developer javascript</p>
        </div>

        <div className="bg-gray-200">
          <p>developer javacript sur sur react, nodejs</p>
          <p>blablabla</p>
        </div>
      </div>
      <div className="border-4 border-orange-500  max-w-[150px] max-h-[205px] ">
        <Image
          src="/images/olygood.jpg"
          alt="olygood"
          width={150}
          height={200}
          layout="responsive"
        />
      </div>

      <div className="bg-gray-200">
        <h2>Contact</h2>
        <h3>vous êtes bien sur la page contact</h3>
        <h3>Coordonnées</h3>
        <p>Email :olygood@outlook.com/</p>
      </div>
    </div>
  );
}
