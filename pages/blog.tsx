import Image from "next/image";
import LineTechno from "../components/lineTechno";
import Card_blog from "../components/Card_blog/Card_blog";

export default function Blog() {
  return (
    <div className="flex flex-col justify-center items-center bg-black-steam ">
      <LineTechno />
      <Card_blog />
      <Card_blog />
      <Card_blog />
    </div>
  );
}
