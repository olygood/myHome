import { useState } from "react";
import Media_studio from "@/components/Media_studio/Media_studio";
import { Parametre } from "@/components/Parametre/parametre";
export default function Art() {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Media_studio />
      <Parametre />
    </div>
  );
}