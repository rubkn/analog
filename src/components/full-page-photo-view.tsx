import { clerkClient } from "@clerk/nextjs/server";
import { deletePhoto, getSinglePhoto } from "~/server/queries";

export async function FullPagePhotoView(props: { photoId: string }) {
  const idAsNumber = Number(props.photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const photo = await getSinglePhoto(idAsNumber);
  const user = await clerkClient.users.getUser(photo.userId);

  return <img src={photo.url} className="object-contain" alt={photo.name} />;
} 
