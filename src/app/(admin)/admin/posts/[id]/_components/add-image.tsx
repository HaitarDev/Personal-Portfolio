"use client";

import { z } from "zod";
import FileUpload from "./uploadImage";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createImage } from "@/app/actions/createImage";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

const formSchema = z.object({
  id: z.string().min(1, "id is required"),
  image: z.string().min(1, "image is required"),
});

export type EditImageType = z.infer<typeof formSchema>;

function AddImage({ imgUrl, id }: { imgUrl: string | null; id: string }) {
  const [editImg, setEditImg] = useState(false);

  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<EditImageType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: id,
      image: "",
    },
  });

  async function onSubmit(values: EditImageType) {
    const data = await createImage(values);

    if (!data?.success) {
      return toast({
        variant: "destructive",
        description: data?.message,
      });
    }

    if (data?.success) {
      toast({
        description: data?.message,
        color: "red",
      });
      setEditImg((prev) => !prev);
      router.refresh();
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Image</CardTitle>
            <CardDescription>Add your post image</CardDescription>
          </div>
          <div>
            <Button
              onClick={() => {
                setEditImg((prev) => !prev);
              }}
            >
              Edit <Edit />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {!editImg && imgUrl ? (
          <Image
            src={imgUrl}
            alt="post image"
            width={800}
            height={800}
            loading="lazy"
            className="rounded-md object-cover"
          />
        ) : (
          <FileUpload
            endpoint="postImage"
            onChange={(url) => {
              if (url) {
                onSubmit({ image: url, id: id });
              }
            }}
          />
        )}
      </CardContent>
    </Card>
  );
}
export default AddImage;
