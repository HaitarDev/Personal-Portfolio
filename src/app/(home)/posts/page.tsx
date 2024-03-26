import { formatDate } from "@/lib/format";
import prisma from "@/lib/prisma";
import Link from "next/link";
async function PostsPage() {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="relative px-24 py-16 max-w-screen-sm lg:max-w-screen-sm mx-auto">
      <div className="space-y-3">
        {posts.map((post) => (
          <div key={post.id}>
            <Link
              href={`/posts/${post.id}`}
              className="flex items-center justify-between text-gray-700 hover:text-primary transition-all"
            >
              <h1>{post.title}</h1>
              <p>{formatDate(post.createdAt)}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PostsPage;
