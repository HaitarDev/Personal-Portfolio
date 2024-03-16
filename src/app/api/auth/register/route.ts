import { UserSchema } from "@/validator/auth";

import { NextRequest } from "next/server";

import prisma from "@/lib/prisma";

import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { email, password } = body;

  const validate = UserSchema.safeParse(body);

  if (!validate.success) return Response.json(validate.error);

  try {
    // check if user already exists

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) return Response.json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,

        password: hashedPassword,
      },
    });

    const { password: newPassword, ...rest } = newUser;

    return Response.json({ user: rest }, { status: 201 });
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}
