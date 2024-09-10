import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/d2d8aa81-8b7c-455e-bd21-04587f0d6e67-23ti.jpeg",
  "https://utfs.io/f/4f1b826e-51ed-4e93-a0fd-62811fc31cb6-e9gpms.jpg",
  "https://utfs.io/f/02e676d8-f6a7-401d-86bb-2ad32af585bd-24vw.jpeg",
  "https://utfs.io/f/4f1b826e-51ed-4e93-a0fd-62811fc31cb6-e9gpms.jpg",
  "https://utfs.io/f/d2d8aa81-8b7c-455e-bd21-04587f0d6e67-23ti.jpeg",
  "https://utfs.io/f/4f1b826e-51ed-4e93-a0fd-62811fc31cb6-e9gpms.jpg",
  "https://utfs.io/f/d2d8aa81-8b7c-455e-bd21-04587f0d6e67-23ti.jpeg",
  "https://utfs.io/f/02e676d8-f6a7-401d-86bb-2ad32af585bd-24vw.jpeg",
  "https://utfs.io/f/4f1b826e-51ed-4e93-a0fd-62811fc31cb6-e9gpms.jpg",
  "https://utfs.io/f/d2d8aa81-8b7c-455e-bd21-04587f0d6e67-23ti.jpeg",
  "https://utfs.io/f/02e676d8-f6a7-401d-86bb-2ad32af585bd-24vw.jpeg",
  "https://utfs.io/f/4f1b826e-51ed-4e93-a0fd-62811fc31cb6-e9gpms.jpg",
  "https://utfs.io/f/d2d8aa81-8b7c-455e-bd21-04587f0d6e67-23ti.jpeg",
  "https://utfs.io/f/02e676d8-f6a7-401d-86bb-2ad32af585bd-24vw.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
