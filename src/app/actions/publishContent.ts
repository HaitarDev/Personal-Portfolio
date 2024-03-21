"use server";

import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { EditPublish } from "../(admin)/admin/posts/[id]/_components/add-publish";

export const publishPost = async (values: EditPublish) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user.id)
      return {
        success: false,
        message: "Failed to create post",
      };

    const data = await prisma.post.update({
      where: {
        id: values.id,
      },
      data: {
        published: values.published,
      },
      select: { published: true },
    });

    if (data.published) {
      return {
        success: true,
        message: "Post published successfully",
      };
    } else {
      return {
        success: true,
        message: "Post Unpublished successfully",
      };
    }
  } catch (error) {
    console.log("[ERROR: PUBLISHED TITLE]", error);
    return {
      success: false,
      message: "Failed to publish post",
    };
  }
};
