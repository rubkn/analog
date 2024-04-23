import "server-only";

import { db } from "./db";
import { photos } from "./db/schema";

import { auth } from "@clerk/nextjs/server";

import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function getAllPhotos() {
  const photos = await db.query.photos.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  if (!photos) throw new Error("No photos found");

  return photos;
}

export async function getMyPhotos() {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  const photos = await db.query.photos.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  return photos;
}

export async function getSinglePhoto(id: number) {
  const photo = await db.query.photos.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!photo) throw new Error("Photo not found");

  return photo;
}

export async function deletePhoto(id: number) {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  await db
    .delete(photos)
    .where(and(eq(photos.id, id), eq(photos.userId, user.userId)));

  redirect("/");
}