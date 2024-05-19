import { Modal } from "./modal";
import { FullPagePhotoView } from "~/components/full-page-photo-view";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <article className="text-blue-gray-500 m-4 flex max-w-[75%] flex-col rounded-lg bg-white font-sans text-base font-light leading-relaxed antialiased shadow-2xl">
        <section className="text-blue-gray-900 flex shrink-0 items-center justify-between p-4 font-sans text-2xl font-semibold leading-snug antialiased">
          <div className="flex items-center gap-3">
            {/* avatar img */}
            <div className="-mt-px flex flex-col">
              <p className="text-blue-gray-900 block font-sans text-sm font-medium leading-normal antialiased">
                Alex Turner
              </p>
              <p className="block font-sans text-xs font-normal text-gray-700 antialiased">
                @alex
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                </svg>
              </span>
            </button>
            <button
              className="select-none rounded-lg bg-green-500 px-4 py-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Free Download
            </button>
          </div>
        </section>
        <section className="border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500 m-auto max-w-[calc((100vh-15%)*0.5)] border-b border-t p-0 font-sans text-base font-light leading-relaxed antialiased">
          <FullPagePhotoView photoId={photoId} />
        </section>
        <section className="text-blue-gray-500 flex shrink-0 flex-wrap items-center justify-between p-4">
          <div className="flex items-center gap-16">
            <div>
              <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
                Views
              </p>
              <p className="text-blue-gray-900 block font-sans text-base font-medium leading-relaxed antialiased">
                44,082,044
              </p>
            </div>
            <div>
              <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
                Downloads
              </p>
              <p className="text-blue-gray-900 block font-sans text-base font-medium leading-relaxed antialiased">
                553,031
              </p>
            </div>
          </div>
          <button
            className="border-blue-gray-500 text-blue-gray-500 focus:ring-blue-gray-200 flex select-none items-center gap-3 rounded-lg border px-4 py-2 text-center align-middle font-sans text-xs font-bold uppercase transition-all hover:opacity-75 focus:ring active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                fill-rule="evenodd"
                d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Share
          </button>
        </section>
      </article>
    </Modal>
  );
}
