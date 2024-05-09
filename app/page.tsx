"use client";

import Image from "next/image";
import type { Metadata } from "next";
import Lottie from "lottie-react";
import animationData from "@/public/lotties/rocket2.json";
// export const metadata: Metadata = {
//   title: "Home | Webventure",
// };

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex flex-row">
      <h1 className="text-4xl mt-8">WebVenture</h1>
      <Lottie
        animationData={animationData}
        style={{ height: 100, width: 100 }}
      />
      </div>
      <div className="flex flex-col">
        <Image
          src={"/captain_donatello/hand-wave.svg"}
          alt="donatello waving"
          width={300}
          height={300}
        />
        <div></div>
        {/* <div className="fade-rule"></div> */}
        <div className="fade-rule"></div>
        <Image
          src={"/captain_donatello/standing.svg"}
          alt="donatello standing"
          width={300}
          height={300}
        />
        <Image
          src={"/captain_donatello/walking.svg"}
          alt="donatello walking"
          width={500}
          height={500}
        />
        <Image
          src={"/captain_donatello/sitting.svg"}
          alt="donatello sitting"
          width={500}
          height={500}
        />
      </div>
    </main>
  );
}
