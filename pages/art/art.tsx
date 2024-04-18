import { useState } from "react";
import Media_studio from "@/components/Media_studio/Media_studio";
import { Parametre } from "@/components/Parametre/parametre";
export default function Art() {
  return (
    <div className="bg-slate-950">
      <div>
        <h1 className="text-white">Art</h1>
      </div>
      <Media_studio />
      <Parametre />
    </div>
  );
}