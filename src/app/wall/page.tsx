import { Wall } from "~/app/wall/wall";
import { Hero } from "~/app/_components/hero";
import { Navigation } from "~/app/_components/navigation";

export const dynamic = "force-dynamic";

export default async function WallPage() {
  return (
    <>
      <Navigation />
      {/* <Hero /> */}
      <main className="container flex min-h-screen flex-col items-center justify-center">
        <Wall />
      </main>
    </>
  );
}
