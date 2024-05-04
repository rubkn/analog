"use client";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useClerk,
  useUser,
} from "@clerk/nextjs";

import { UploadButton } from "./utils/uploadthing";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const { user, isLoaded, isSignedIn } = useUser();
  const { signOut } = useClerk();

  return (
    <>
      <main className="bg-blur-lg flex min-h-[100dvh] w-full bg-radial-light dark:bg-radial-dark">
        <div className="flex flex-1 flex-col items-center justify-center bg-[#f5f5f5] px-6 py-12 sm:px-10 md:flex-row md:px-16 lg:px-20 xl:px-24 dark:bg-[#1a1a1a]">
          <div className="max-w-md space-y-4 text-center md:mr-10 md:text-left lg:mr-16 xl:mr-20">
            <div className="flex items-center">
              {/* insert logo */}
              <h1 className="font-chipo text-2xl font-bold tracking-tight text-[#333] dark:text-[#f5f5f5]">
                rawstorm.
              </h1>
            </div>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-[#333] sm:text-5xl dark:text-[#f5f5f5]">
              Rebel against the ordinary.
            </h2>
            <p className="text-lg text-[#666] dark:text-[#999]">
              Share your most authentic work with a community that embraces the
              raw and real in photography.
            </p>
          </div>
          <article className="mt-10 flex w-full max-w-md flex-col space-y-8 rounded-lg bg-white p-6 shadow-lg md:mt-0 dark:bg-[#222]">
            <section>
              <h2 className="text-2xl font-bold text-gray-200">
                Welcome back, {user?.fullName}
              </h2>
              <p className="text-[#666] dark:text-[#999]">Is this you?</p>
            </section>

            <section className="flex flex-col items-center space-x-4">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-[#f5f5f5] dark:bg-[#222]">
                  {!user || !isLoaded ? (
                    <div className="flex items-center space-x-4">
                      <div className="flex h-full w-full items-center justify-center rounded-full">
                        <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200 dark:bg-gray-600"></div>
                      </div>

                      <div className="flex flex-col">
                        <div className="mb-2 h-4 w-24 animate-pulse rounded-md bg-gray-200 dark:bg-gray-600"></div>
                        <div className="h-4 w-16 animate-pulse rounded-md bg-gray-200 dark:bg-gray-600"></div>
                      </div>
                    </div>
                  ) : user.imageUrl ? (
                    <img
                      src={user.imageUrl}
                      alt={user.username as string}
                      className="h-full w-full rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-200 text-xl font-semibold dark:bg-gray-600">
                      {`${user?.firstName?.charAt(0)}${user?.lastName?.charAt(0)}`}
                    </div>
                  )}
                </div>

                <div>
                  <div className="font-medium">{user?.fullName}</div>
                  <div className="text-sm text-[#666] dark:text-[#999]">
                    {user?.primaryEmailAddress?.emailAddress}
                  </div>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => router.push("/wall")}
                >
                  Yes, continue
                </button>
              </div>
              <div className="flex w-full flex-col">
                <hr className="my-4 w-full border-gray-600 dark:border-gray-200" />

                <div className="flex gap-2">
                  <button
                    className="btn btn-secondary"
                    onClick={() => signOut()}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>
      <main className="flex items-center justify-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => router.refresh()}
          />
        </SignedIn>
      </main>
    </>
  );
}
