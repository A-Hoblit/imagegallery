import { getMyImages } from "~/server/queries";
import {
  SignedIn,
  SignedOut,
} from '@clerk/nextjs'
import Image from "next/image";

export const dynamic = "force-dynamic";


async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
    {images.map((image) => (
      <div key={image.id} className="w-48 h-48 flex flex-col">
        <Image 
          src={image.url}
          height={480}
          width={480}
          alt = {image.name}
        />
        <div>{image.name}</div>
      </div>
    ))}
  </div>
  );
}


export default async function HomePage() {
  return (
    <main className="">

      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sign in</div>
      </SignedOut>

      <SignedIn>
        <Images></Images>
      </SignedIn>


    </main>
  );
}
