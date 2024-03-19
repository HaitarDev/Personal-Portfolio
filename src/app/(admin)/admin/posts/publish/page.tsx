"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { KeyboardEvent, useState } from "react";
import { X } from "lucide-react";
import { Label } from "@/components/ui/label";
import AddImage from "../[id]/_components/add-image";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  content: z.string(),

  published: z.boolean().default(false),
  // tags: z.array(z.string()),
});

function PublishPage() {
  const [tags, setTags] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      published: false,
      // tags: tags,
    },
  });

  function handleKeyDown(e: any) {
    if (e.key !== "Enter") return;
    if (!e.target.value!.trim()) return;

    setTags([...tags, e.currentTarget.value]);
    e.currentTarget.value = "";
  }

  function handleDeleteTag(i: number) {
    setTags(tags.filter((_, index) => index !== i));
  }
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(tags);
    console.log(values);
  }

  return (
    <div className="py-4 px-24">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />{" "}
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Input placeholder="content" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />{" "}
            <div>
              <Label>select your Tags</Label>
              <div className="border p-2">
                <div className="flex gap-3 text-sm">
                  {tags.map((tag, i) => (
                    <div
                      onClick={() => handleDeleteTag(i)}
                      className="flex items-center gap-2 bg-secondary p-1 rounded-lg cursor-pointer"
                      key={i}
                    >
                      <p>{tag}</p>
                      <X />
                    </div>
                  ))}
                  <input
                    type="text"
                    placeholder="Add tag"
                    className="border-none focus:outline-none "
                    onKeyDown={handleKeyDown}
                  />
                </div>
              </div>
              <FormMessage />
            </div>
            <FormField
              control={form.control}
              name="published"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Publish your blog</FormLabel>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
export default PublishPage;
