import { FullPagePhotoView } from "~/common/full-page-photo-view";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <div className="flex h-full min-h-0 w-full min-w-0 overflow-y-hidden">
      <FullPagePhotoView photoId={photoId} />
    </div>
  );
}
