import Link from "next/link";
import Image from "next/image";
import { getAllPhotos } from "~/server/queries";

export async function Wall() {
  const gallery = await getAllPhotos();

  return (
    <div className="sm:columns-1 sm:gap-4 md:columns-2 lg:columns-3 lg:gap-4">
      {gallery.map((photo) => (
        <Link href={`/p/${photo.id}`}>
          <Image
            key={photo.id}
            src={photo.url}
            alt={photo.name}
            width={500}
            height={500}
            style={{ objectFit: "contain" }}
            className="mb-4 h-auto max-w-full rounded-lg"
          />
        </Link>
      ))}
    </div>
  );
}
