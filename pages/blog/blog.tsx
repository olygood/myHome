import Image from "next/image";
import LineTechno from "../../components/LineTechno/LineTechno";
import Card_blog from "../../components/Card_blog/Card_blog";
import { TwitterApi } from "twitter-api-v2";
import { useEffect, useState } from "react";

//interface pour les tweets
interface Tweet {
  id: number;
  title: string;
  body: string;
  userId: number;
}


export default function Blog() {
  const [tweets, setTweets] = useState<Tweet [] | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setTweets(data));
  }, []);

  useEffect(() => {
    console.log(tweets); // S'exécute chaque fois que `tweets` change
  }, [tweets]);



  return (
    <div className="flex flex-col justify-center items-center  ">
      {tweets && tweets[0] &&(
        <div>
          <h1>{tweets[0].title}</h1>
          <p>{tweets[0].body}</p>
        </div>
      
      )}
      <LineTechno />
      <Card_blog />
      <Card_blog />
      <Card_blog />
    </div>
  );
}
