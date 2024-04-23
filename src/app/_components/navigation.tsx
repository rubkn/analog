import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function Navigation() {
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
          </SignedIn>
        </li>
        <li></li>
      </ul>
    </nav>
  );
}
