import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddImage from "./_components/add-image";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

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
          <Card>
            <CardHeader>
              <CardTitle>Content</CardTitle>
              <CardDescription>
                Change your password here. After saving, l be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
export default PostIDPage;
