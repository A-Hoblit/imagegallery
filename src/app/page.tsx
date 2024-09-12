import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";
import {
  SignedIn,
  SignedOut,
} from '@clerk/nextjs'


async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
    {images.map((image) => (
      <div key={image.id} className="w-48 flex flex-col">
        <img src={image.url} />
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
