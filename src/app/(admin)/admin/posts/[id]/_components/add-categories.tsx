"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

import { FormEvent, useState } from "react";

import { X } from "lucide-react";
import { createTags } from "@/app/actions/createTags";
import { deleteTag } from "@/app/actions/deleteTag";
import { Tag } from "@prisma/client";

function AddCategories({ tags, id }: { tags: Tag[]; id: string }) {
  const [newTags, setNewTags] = useState<string[]>(tags.map((tag) => tag.name));

  const router = useRouter();
  const { toast } = useToast();

  function handleKeyDown(e: any) {
    if (e.key !== "Enter") return;
    if (!e.target.value!.trim()) return;

    setNewTags([...newTags, e.currentTarget.value.toUpperCase()]);
    e.currentTarget.value = "";
  }

  async function handleDeleteTag(tag: string) {
    const data = await deleteTag(tag, id);

    if (!data?.success) {
      return toast({
        variant: "destructive",
        title: data?.message,
      });
    }

    if (data?.success) {
      toast({
        title: data?.message,
        color: "red",
      });
      router.refresh();
    }
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = await createTags(newTags, id);

    if (!data?.success) {
      return toast({
        variant: "destructive",
        title: data?.message,
      });
    }

    if (data?.success) {
      toast({
        title: data?.message,
        color: "red",
      });
      router.refresh();
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Categories</CardTitle>
        <CardDescription>
          Add your Categories here and submit it
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex gap-3 text-sm flex-wrap">
          {tags.map((tag, i) => (
            <div
              onClick={() => handleDeleteTag(tag.id)}
              className="flex items-center gap-2 bg-secondary p-1 rounded-lg cursor-pointer"
              key={i}
            >
              <p>{tag.name}</p>
              <X />
            </div>
          ))}
        </div>
        <form onSubmit={onSubmit}>
          <input
            id="tags"
            name="tags"
            type="text"
            placeholder="Add tag"
            className="w-full rounded-md p-2 border border-secondary  shadow-sm focus:outline-none "
            onKeyDown={handleKeyDown}
          />
        </form>
      </CardContent>
    </Card>
  );
}
export default AddCategories;
