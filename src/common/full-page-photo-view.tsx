import { clerkClient } from "@clerk/nextjs/server";
import { deletePhoto, getSinglePhoto } from "~/server/queries";

export async function FullPagePhotoView(props: { photoId: string }) {
  const idAsNumber = Number(props.photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const photo = await getSinglePhoto(idAsNumber);
  const user = await clerkClient.users.getUser(photo.userId);

  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center text-white">
      <div className="w-full">
        <img src={photo.url} className="object-contain" alt={photo.name} />
      </div>
      <div className="flex h-full w-56 flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-xl">{photo.name}</div>

        <div className="p-2">
          <form
            action={async () => {
              "use server";

              await deletePhoto(idAsNumber);
            }}
          >
            <button type="submit" className="btn btn-error">
              Delete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
