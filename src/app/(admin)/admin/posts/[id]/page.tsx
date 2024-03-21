import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddImage from "./_components/add-image";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import AddContent from "./_components/add-content";

async function PostIDPage({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!post) redirect("/admin/posts");

  return (
    <div className="flex  justify-center w-full h-full  px-24 py-4 ">
      <Tabs
        defaultValue="image"
        className="w-[400px] md:w-[600px] lg:w-[1200px] "
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="image">Image</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
        </TabsList>
        <TabsContent value="image">
          <AddImage imgUrl={post.imageUrl} id={post.id} />
        </TabsContent>
        <TabsContent value="content">
          <AddContent id={post.id} content={post.content} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
export default PostIDPage;
