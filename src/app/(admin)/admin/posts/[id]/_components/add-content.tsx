"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import MDEditor from "@uiw/react-md-editor";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { Form, FormField, FormMessage } from "@/components/ui/form";
import { createContent } from "@/app/actions/createContent";
import { useState } from "react";

const formSchema = z.object({
  content: z.string().min(1, "Content is required"),
  id: z.string(),
});

export type EditContent = z.infer<typeof formSchema>;

function AddContent({ content, id }: { content: string | null; id: string }) {
  const [isEdit, setIsEdit] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  console.log(content);

  const form = useForm<EditContent>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: content ? content : "",
      id: id,
    },
  });

  async function onSubmit(values: EditContent) {
    const data = await createContent(values);

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
      setIsEdit((prev) => !prev);
      router.refresh();
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Content</CardTitle>
            <CardDescription>
              Add your Content here and submit it
            </CardDescription>
          </div>
          <div>
            <Button onClick={() => setIsEdit((prev) => !prev)}>Edit</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {isEdit || !content ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <>
                    <MDEditor {...field} />
                    <FormMessage />
                  </>
                )}
              />

              <Button type="submit" className="mt-4">
                Save
              </Button>
            </form>
          </Form>
        ) : (
          <MDEditor.Markdown
            source={content}
            style={{
              padding: "1rem 0.5rem",
              // background: "rgb(100 116 139 /10%)",
            }}
          />
        )}
      </CardContent>
    </Card>
  );
}
export default AddContent;
