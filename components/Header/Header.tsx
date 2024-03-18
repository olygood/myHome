// import React,{ForwardedRef} from "react";	
import Link from "next/link";
import Image from "next/image";
import "../../app/globals.css";
import  styles from './Header.module.css'
// import logo_home from '../public/images/home_black_24dp.png'

function Header() {
  // const Header = React.forwardRef<HTMLElement>((props, ref) => {
  //   // Votre code ici
  //   return <header ref={ref}>...</header>;
  // });
  return (
    <header className={`${styles.container_header} fixed w-full  `}>
      <nav>
        <ul className="flex flex-row justify-around items-center p-4 bg-color-yellow ">
          <li>
            <Link href="/">
              <Image
                src="/images/home_black_24dp.png"
                alt="logo"
                width={48}
                height={48}
              />
            </Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
