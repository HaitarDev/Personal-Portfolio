"use client";

import { ourFileRouter } from "@/app/api/uploadthing/core";
import { useToast } from "@/components/ui/use-toast";
import { UploadDropzone } from "@/utils/uploadthing";

type Props = {
  endpoint: keyof typeof ourFileRouter;
  onChange: (url?: string) => void;
};
export default function FileUpload({ endpoint, onChange }: Props) {
  const { toast } = useToast();
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res[0]?.url);
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        toast({
          variant: "destructive",
          description: error.message,
        });
      }}
    />
  );
}
