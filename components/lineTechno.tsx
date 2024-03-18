import Link from "next/link";
export default function lineTechno() {
  return (
    <ul
      style={{ listStyleType: "none" }}
      className="flex flex-wrap justify-center items-center gap-2 m-4 "
    >
      <Link className="bg-color-green rounded-full w-auto h-auto items-center justify-center text-center  p-3" href="/techno">javacript</Link>
      <Link className="bg-color-green rounded-full w-auto h-auto items-center justify-center text-center p-3" href="/techno">Nodjs</Link>
      <Link className="bg-color-green rounded-full w-auto h-auto items-center justify-center text-center p-3" href="/techno">Figma</Link>
      <Link className="bg-color-green rounded-full w-auto h-auto items-center justify-center text-center p-3" href="/techno">React</Link>
      <Link className="bg-color-green rounded-full w-auto h-auto items-center justify-center text-center p-3" href="/techno">Photoshop</Link>
    </ul>
  );
}
