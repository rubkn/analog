import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mock = [
  "https://utfs.io/f/c0553481-5800-4903-b84f-18acbc613775-nhfnk5.JPG",
  "https://utfs.io/f/51571297-d53e-485d-948a-031cf1416976-nhfnmu.JPG",
  "https://utfs.io/f/f4f130f2-cfd5-436c-910c-957a537f55d5-nhfnno.JPG",
  "https://utfs.io/f/f540a744-880e-4b77-a7e2-64144990f103-nhfnnl.JPG",
  "https://utfs.io/f/da713851-ec69-432c-9279-b09eed692e66-nhfnob.JPG",
  "https://utfs.io/f/94625d81-8091-49b7-b45a-742c6813c2b7-nhfnnn.JPG",
  "https://utfs.io/f/4fe17171-2913-4447-a7a6-da4ee24cd53e-nhfnnp.JPG",
];

const images = mock.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const photos = await db.query.photos.findMany();

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
