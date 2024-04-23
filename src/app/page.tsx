import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Gallery() {
  const photos = await db.query.photos.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  return (
    <div className="columns-6 gap-6 sm:columns-1 sm:gap-2 md:columns-2 lg:columns-4 lg:gap-4">
      {[...photos, ...photos, ...photos].map((image) => (
        <img
          key={image.id}
          src={image.url}
          className="mb-4 h-auto max-w-full rounded-lg"
        />
      ))}
    </div>
  );
}

export default async function HomePage() {
  const photos = await db.query.photos.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

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
