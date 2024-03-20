import { Button } from "@/components/ui/button";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";

async function PostsPage() {
  // TODO: ADD SORTING BETWEEN PUBLISHING AND UNPUBLISHING POSTS
  const posts = await prisma.post.findMany();
  return (
    <div className="py-4 px-24 space-y-6">
      <div>
        <Button asChild>
          <Link href={"/admin/posts/post-title"}> Publish a post </Link>
        </Button>
      </div>
      <div>
        {posts.map((post) => (
          <div key={post.id} className="flex justify-between">
            <Link href={`/admin/posts/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>
            <div>
              {post.published ? (
                <Badge>Published</Badge>
              ) : (
                <Badge variant={"secondary"}>Unpublished</Badge>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PostsPage;
