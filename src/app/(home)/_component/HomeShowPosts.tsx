"use client";

import { Button } from "@/components/ui/button";
import { Post } from "@prisma/client";
import { useRouter } from "next/navigation";

function HomeShowPosts({ posts }: { posts: Post[] }) {
  const router = useRouter();

  const getRandomElements = (arr: Post[]) => {
    if (arr.length <= 1) {
      return arr;
    } else {
      const randomIndex1 = Math.floor(Math.random() * arr.length);
      let randomIndex2 = Math.floor(Math.random() * arr.length);

      while (randomIndex1 === randomIndex2) {
        randomIndex2 = Math.floor(Math.random() * arr.length);
      }

      return [arr[randomIndex1], arr[randomIndex2]];
    }
  };

  const newRandomArr = getRandomElements(posts);

  return (
    <>
      {newRandomArr.map((item) => (
        <div key={item.id}>
          <Button
            variant={"link"}
            onClick={() => router.push(`/posts/${item.id}`)}
            className="text-muted-foreground text-start p-0"
          >
            {item.title}
          </Button>
        </div>
      ))}
    </>
  );
}
export default HomeShowPosts;
