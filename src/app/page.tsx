import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const photos = await db.query.photos.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="columns-4 gap-5">
        {photos.map((image) => (
          <img
            key={image.id}
            src={image.url}
            className="h-auto max-w-full rounded-lg"
          />
        ))}
      </div>
    </main>
  );
}
