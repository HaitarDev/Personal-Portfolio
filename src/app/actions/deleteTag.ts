"use server";

import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

export const deleteTag = async (tagId: string, postId: string) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user.id)
      return {
        success: false,
        message: "Failed to create post",
      };

    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        tags: true,
      },
    });

    if (!post) return { success: false, message: "There is no post yet" };

    const posts = await prisma.post.count({
      where: {
        tags: {
          every: {
            id: tagId,
          },
        },
      },
    });

    if (posts > 1) {
      await prisma.post.update({
        where: {
          id: postId,
        },
        data: {
          tags: {
            disconnect: {
              id: tagId,
            },
          },
        },
      });
    } else {
      await prisma.tag.delete({
        where: {
          id: tagId,
        },
      });
    }

    return {
      success: true,
      message: "Tags created or updated succefully ",
    };
  } catch (error) {
    console.log("[ERROR: CREATE TAGS]", error);
    return {
      success: false,
      message: "Failed to create tags",
    };
  }
};
