export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/admin/posts",
    "/admin/posts/:id+",
    "/admin/posts/publish",
    "/admin/posts/post-title",
  ],
};
