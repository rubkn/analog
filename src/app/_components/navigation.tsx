"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../utils/uploadthing";
import { useRouter } from "next/navigation";

export function Navigation() {
  const router = useRouter();

  return (
    <nav className="flex justify-between bg-neutral-900 text-white">
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
    </nav>
  );
}
