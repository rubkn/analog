import { Wall } from "~/app/_components/wall";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <>
      <header className="">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            gllry
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-400 sm:px-16 lg:text-xl xl:px-48">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="text-center text-3xl text-white">
          <Wall />
        </div>
      </main>
    </>
  );
}
