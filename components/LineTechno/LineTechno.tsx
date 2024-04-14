import Link from "next/link";
import styles from "./LineTechno.module.css";
export default function LineTechno() {
  return (
    <>
    <div className={styles.backgroundImage}></div>
    <div className="mb-6">
      <ul style={{ listStyleType: "none" }} className="flex gap-2">
        <li>
          <Link className="bg-color-green rounded-full w-auto h-auto items-center justify-center text-center p-3" href="/techno">
              Twitter
            
          </Link>
          
        </li>
        <li>
          <Link className="bg-color-green rounded-full w-auto h-auto items-center justify-center text-center p-3" href="/techno">
              Reddit
            
          </Link>
          
        </li>
        <li>
          <Link className="bg-color-green rounded-full w-auto h-auto items-center justify-center text-center p-3" href="/techno">
              Midjourney
            
          </Link>
          
        </li>
        <li>
          <Link className="bg-color-green rounded-full w-auto h-auto items-center justify-center text-center p-3" href="/techno">
              Xbox
            
          </Link>
          
        </li>
        <li>
          <Link className="bg-color-green rounded-full w-auto h-auto items-center justify-center text-center p-3" href="/techno">
              javascript
            
          </Link>
          
        </li>
      </ul>
    </div>
    </>
  );
}
