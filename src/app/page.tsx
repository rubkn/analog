import { Wall } from "~/app/_components/wall";
import { Hero } from "~/app/_components/hero";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="text-center text-3xl text-white">
          <Wall />
        </div>
      </main>
    </>
  );
}
