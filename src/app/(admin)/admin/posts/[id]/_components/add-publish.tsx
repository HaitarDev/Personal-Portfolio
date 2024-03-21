"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Checkbox } from "@/components/ui/checkbox";
import { publishPost } from "@/app/actions/publishContent";

const formSchema = z.object({
  published: z.boolean().default(false),
  id: z.string(),
});

export type EditPublish = z.infer<typeof formSchema>;

function AddPublish({ published, id }: { published: boolean; id: string }) {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<EditPublish>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      published: published,
      id: id,
    },
  });

  async function onSubmit(values: EditPublish) {
    const data = await publishPost(values);
    console.log(data);

    if (!data?.success) {
      return toast({
        variant: "destructive",
        title: data?.message,
      });
    }

    toast({
      title: data?.message,
      color: "red",
    });

    router.refresh();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content</CardTitle>
        <CardDescription>Add your Content here and submit it</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="published"
              render={({ field }) => (
                <FormItem className="flex items-center gap-1">
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

            <Button type="submit" className="mt-4">
              Save
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
export default AddPublish;
