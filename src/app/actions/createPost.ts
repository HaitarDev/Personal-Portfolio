"use server";

import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { TitleType } from "../(admin)/admin/posts/post-title/page";

export const createPost = async (values: TitleType) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user.id)
      return {
        success: false,
        message: "Failed to create post",
      };

    const data = await prisma.post.create({
      data: {
        title: values.title,
      },
    });
    return {
      success: true,
      message: "Post created successfully",
      id: data.id,
    };
  } catch (error) {
    console.log("[ERROR: CREATE TITLE]", error);
    return {
      success: false,
      message: "Failed to create post",
    };
  }
};
