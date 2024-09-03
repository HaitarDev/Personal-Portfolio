"use server";

import { EditImageType } from "@/app/(admin)/admin/posts/[id]/_components/add-image";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/authOptions";
import { UTApi } from "uploadthing/server";

export const createImage = async (values: EditImageType) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return { success: false, message: "Image failed to update" };
    }

    const currPost = await prisma.post.findUnique({
      where: {
        id: values.id,
      },
    });
    if (currPost?.imageUrl) {
      const utapi = new UTApi();

      const newUrl = currPost.imageUrl.substring(
        currPost.imageUrl.lastIndexOf("/") + 1
      );

      await utapi.deleteFiles(newUrl);
    }

    await prisma.post.update({
      where: {
        id: values.id,
      },
      data: {
        imageUrl: values.image,
      },
    });

    return { success: true, message: "Image updated successfully" };
  } catch (error) {
    return { success: false, message: "Image failed to update" };
  }
};
