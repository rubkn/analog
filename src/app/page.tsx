import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const photos = await db.query.photos.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-900 text-white">
      <div className="columns-6 gap-6 sm:columns-1 sm:gap-2 md:columns-2 lg:columns-4 lg:gap-4">
        {[...photos, ...photos, ...photos].map((image) => (
          <img
            key={image.id}
            src={image.url}
            className="mb-4 h-auto max-w-full rounded-lg"
          />
        ))}
      </div>
    </main>
  );
}
