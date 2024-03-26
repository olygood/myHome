import Image from "next/image";
import Link from "next/link";
export function Theme() {
  return (
    <div className="bg-slate-950">
      <h2>name</h2>
      <Link href=''>
        <a>
            <Image
                src="/images/abeille.jpg"
                alt="Abeille"
                width={300}
                height={300}
            ></Image>
        </a>
      </Link>

    </div>
  );
}
