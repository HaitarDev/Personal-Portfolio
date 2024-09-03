import CredentialsProvider from "next-auth/providers/credentials";

import { PrismaAdapter } from "@next-auth/prisma-adapter";

import prisma from "@/lib/prisma";

import { NextAuthOptions } from "next-auth";

import bcrypt from "bcryptjs";

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),

  pages: {
    signIn: "/admin/sign-in",
  },

  providers: [
    CredentialsProvider({
      name: "credentials",

      credentials: {
        email: { label: "Email", type: "text" },

        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        // here is where we validate the user and return the user or null

        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const existingUser = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!existingUser) return null;

        const passwordMatch = await bcrypt.compare(
          credentials.password,

          existingUser.password!
        );

        if (!passwordMatch) return null;

        const { password: newPassword, ...rest } = existingUser;

        return rest;
      },
    }),
  ],

  // here we pass data that we want to client session

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,

          id: user.id,
        };
      }

      return token;
    },

    async session({ session, token }) {
      return {
        ...session,

        user: {
          ...session.user,

          id: token.id,
        },
      };
    },
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET!,
};

export default authOptions;
