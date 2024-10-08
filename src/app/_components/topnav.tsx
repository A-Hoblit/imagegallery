"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import posthog from "posthog-js";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              posthog.capture("Upload");
              router.refresh();
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
}
