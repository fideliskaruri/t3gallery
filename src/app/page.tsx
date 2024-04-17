import Link from "next/link";
import { db } from "~/server/db";

const images = [
  "https://utfs.io/f/0793a546-d4a2-49bb-b0f5-0198a6a96888-fjf2u2.jpg",
  "https://utfs.io/f/b04764ee-3ff0-4265-9b4d-d38318f5a079-wh2czt.jpg",
  "https://utfs.io/f/07accdd9-f2e3-48b8-a675-a0b895915d4e-p6ddoe.jpg",
  "https://utfs.io/f/78f47bc5-0e0d-41ea-bc6e-709b4c1c619c-xas2sr.jpg"
]
export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => <div key={post.id}>{post.name}</div>)}
        {images.map((image, index) => <img src={image} key={index} className="w-48"/>)}
      </div>
    </main>
  );
}
