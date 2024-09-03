"use server";

import { getServerSession } from "next-auth";
import { EditContent } from "../(admin)/admin/posts/[id]/_components/add-content";
import authOptions from "@/lib/authOptions";

import prisma from "@/lib/prisma";

export async function createContent(values: EditContent) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user.id)
      return {
        success: false,
        message: "Failed to create post",
      };

    await prisma.post.update({
      where: {
        id: values.id,
      },
      data: {
        content: values.content,
      },
    });

    return {
      success: true,
      message: "Content updated successfully",
    };
  } catch (error) {
    console.log("[ERROR : CreateContent]", error);
    return {
      success: false,
      message: "Description chaptertle failed to update",
    };
  }
}
