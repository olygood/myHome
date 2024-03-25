// import { useRef,useEffect} from "react";
import { AppProps } from "next/app";
import "../app/globals.css";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  // const headerRef = useRef<HTMLHeadElement>(null);
  // useEffect(() => {
  //   if (headerRef.current) {
  //     const headerHeight = headerRef.current.offsetHeight;
  //     document.body.style.paddingTop = `${headerHeight}px`;
  //   }
  // }, []);

  return (
    <div className="myUniqueContainer_app ">
      <Header />
      <div className="pt-20">
      <Component {...pageProps} />
      </div>
      <Footer />
    </div>

  );
}

export default MyApp;

