"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../utils/uploadthing";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function Navigation() {
  const router = useRouter();

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-gray-950/80">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            {/* <CameraIcon className="h-6 w-6" /> */}
            <span className="text-lg">Snap Shots</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="#"
            >
              Home
            </Link>
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="#"
            >
              Profile
            </Link>
            <Link
              className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Upload
            </Link>
          </nav>
        </div>
      </header>

      {/* <nav className="flex justify-between">
        <ul className="flex gap-4">
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
        <ul>
          <li>
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
          </li>
          <li></li>
        </ul>
      </nav> */}
    </>
  );
}
