import { Modal } from "./modal";
import { FullPagePhotoView } from "~/common/full-page-photo-view";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <FullPagePhotoView photoId={photoId} />
    </Modal>
  );
}
