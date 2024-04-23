import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getMyPhotos() {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const photos = await db.query.photos.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  return photos;
}
