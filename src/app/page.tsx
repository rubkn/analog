import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyPhotos } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Gallery() {
  const gallery = await getMyPhotos();

  return (
    <div className="columns-6 gap-6 sm:columns-1 sm:gap-2 md:columns-2 lg:columns-4 lg:gap-4">
      {gallery.map((photo) => (
        <Link href={`/p/${photo.id}`}>
          <Image
            key={photo.id}
            src={photo.url}
            alt={photo.name}
            width={400}
            height={400}
            style={{ objectFit: "contain" }}
            className="mb-4 h-auto max-w-full rounded-lg"
          />
        </Link>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-900 text-white">
      <div className="text-center text-3xl text-white">
        <SignedOut>You need to be signed in to view the gallery</SignedOut>
        <SignedIn>
          <Gallery />
        </SignedIn>
      </div>
    </main>
  );
}
