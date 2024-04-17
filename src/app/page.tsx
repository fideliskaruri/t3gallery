import { SignedIn, SignedOut } from "@clerk/nextjs";
import { headers } from "next/headers";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany();


  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image, index) => <img src={image.url} key={index} className="w-48" />)}
    </div>
  )
}

export default async function HomePage() {
  headers();


  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-2xl">Please Sign In Above to see images</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main >
  );
}
