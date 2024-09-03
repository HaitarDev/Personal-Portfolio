"use server";

import authOptions from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

export const createTags = async (tags: string[], postId: string) => {
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

    const existingTagNamesInPost = post.tags.map((tag) => tag.name);

    for (let tag of tags) {
      if (existingTagNamesInPost.includes(tag)) continue;
      // if tag already exists, continue to the next tag

      const existingTagNamesInTags = await prisma.tag.findFirst({
        where: {
          name: tag,
        },
      });

      // if no tag yet create one
      if (!existingTagNamesInTags) {
        await prisma.tag.create({
          data: {
            name: tag,
            posts: {
              connect: { id: postId },
            },
          },
        });
      } else {
        await prisma.post.update({
          where: {
            id: postId,
          },
          data: {
            tags: {
              connect: {
                id: existingTagNamesInTags.id,
              },
            },
          },
        });
      }
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
