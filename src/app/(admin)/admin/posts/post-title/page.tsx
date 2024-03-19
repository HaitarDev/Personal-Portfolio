"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createPost } from "@/app/actions/createPost";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  title: z.string().min(2).max(50),
});
export type TitleType = z.infer<typeof formSchema>;

function PostTitle() {
  const router = useRouter();

  const form = useForm<TitleType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  async function onSubmit(values: TitleType) {
    const data = await createPost(values);
    console.log(data);
    if (!data.success) return form.setError("title", { message: data.message });

    router.push(`/admin/posts/${data.id}`);
  }
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Post Title</FormLabel>
                <FormControl>
                  <Input placeholder="how to manage ...." {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
export default PostTitle;
