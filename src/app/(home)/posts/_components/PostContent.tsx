"use client";

import MDEditor from "@uiw/react-md-editor";

function PostContent({ content }: { content: string }) {
  return (
    <div>
      <MDEditor.Markdown source={content} />
    </div>
  );
}
export default PostContent;
