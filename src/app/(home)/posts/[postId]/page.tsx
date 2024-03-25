import { formatDate } from "@/lib/format";
import prisma from "@/lib/prisma";
import MDEditor from "@uiw/react-md-editor";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import PostContent from "../_components/PostContent";
async function PostPage({ params }: { params: { postId: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: params.postId,
    },
  });
  console.log(post);

  return (
    <div className="relative px-24 py-16 max-w-screen-sm lg:max-w-screen-sm mx-auto">
      {post && (
        <>
          <p className="text-sm text-muted-foreground">
            {formatDate(post.createdAt)}
          </p>
          <div className="flex flex-col gap-8">
            <h1 className="relative text-4xl font-extrabold tracking-tight lg:text-5xl">
              {post.title}
              <div className="absolute md:-left-24 sm:-left-12 hidden sm:block top-1/2 -translate-y-1/2  cursor-pointer p-1 rounded-full border hover:bg-gray-100/55 transition-colors text-gray-500">
                <ArrowLeft />
              </div>
            </h1>
            <div className="relative aspect-video">
              <Image
                src={post.imageUrl!}
                alt="course image"
                fill
                className="rounded-md object-cover"
              />
            </div>
            <div>
              <PostContent content={post.content!} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default PostPage;
