import { Button } from "@/components/ui/button";
import Link from "next/link";

function PostsPage() {
  return (
    <div className="py-4 px-24">
      <Button asChild>
        <Link href={"/admin/posts/post-title"}> Publish a post </Link>
      </Button>
    </div>
  );
}
export default PostsPage;
