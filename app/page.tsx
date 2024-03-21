import Image from "next/image";
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Home | Webventure'
}

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-4xl">This is WebVenture</h1>
      <div className="flex">
        <Image
          src={"/captain_donatello/hand-wave.svg"}
          alt="donatello waving"
          width={300}
          height={300}
        />
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
