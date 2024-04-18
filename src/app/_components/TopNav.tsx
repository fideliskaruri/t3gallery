"use client";

import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import { ourFileRouter } from "../api/uploadthing/core";
import { useRouter } from "next/navigation";
function TopNav() {
    const router = useRouter();

    return (
        <nav className="flex w-full p-4 items-center justify-between text-xl border-b font-semibold ">
            <div>Gallery</div>
            <div className="flex flex-row gap-2">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UploadButton endpoint="imageUploader" onClientUploadComplete={() => router.refresh() } />

                    <UserButton />
                    <SignOutButton />
                </SignedIn>
            </div>
        </nav>
    )
}

export default TopNav;