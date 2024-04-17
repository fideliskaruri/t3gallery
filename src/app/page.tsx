import { headers } from "next/headers";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";


export default async function HomePage() {
  headers();
  const images = await db.query.images.findMany();


  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {images.map((image, index) => <img src={image.url} key={index} className="w-48" />)}
      </div>
    </main >
  );
}
