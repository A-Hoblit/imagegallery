import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/d2d8aa81-8b7c-455e-bd21-04587f0d6e67-23ti.jpeg",
  "https://utfs.io/f/4f1b826e-51ed-4e93-a0fd-62811fc31cb6-e9gpms.jpg",
  "https://utfs.io/f/02e676d8-f6a7-401d-86bb-2ad32af585bd-24vw.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
