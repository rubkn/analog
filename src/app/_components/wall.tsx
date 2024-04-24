import Link from "next/link";
import Image from "next/image";
import { getAllPhotos } from "~/server/queries";

export async function Wall() {
  const gallery = await getAllPhotos();

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
