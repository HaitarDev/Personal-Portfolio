"use client";
import {
  Dialog,
  DialogClose,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogImage,
  DialogSubtitle,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/motion-dialog";
import { urlFor } from "@/sanity/lib/image";
import { Project } from "@/types/sanity.types";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

function DialogProject({ item }: { item: Project }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient && (
        <Dialog
          transition={{
            type: "spring",
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          <DialogTrigger
            style={{
              borderRadius: "12px",
            }}
            className="flex  flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
          >
            <DialogImage
              src={urlFor(item.images[0]).width(500).height(300).url()}
              alt={item.title ?? ""}
              className="h-48 w-full object-cover"
            />
            <div className="flex flex-grow flex-row items-end justify-between p-2">
              <div>
                <DialogTitle className="text-zinc-950 dark:text-zinc-50">
                  {item.title ?? "title not found"}
                </DialogTitle>
                <DialogSubtitle className="text-zinc-700 dark:text-zinc-400 line-clamp-1">
                  {item.description ?? ""}
                </DialogSubtitle>
              </div>
              <button
                type="button"
                className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500"
                aria-label="Open dialog"
              >
                <PlusIcon size={12} />
              </button>
            </div>
          </DialogTrigger>
          <DialogContainer>
            <DialogContent
              style={{
                borderRadius: "24px",
              }}
              className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
            >
              <DialogImage
                src={urlFor(item.images[0]).width(500).height(300).url()}
                alt={item.title ?? ""}
                className="h-full w-full"
              />
              <div className="p-6">
                <DialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50">
                  {item.title ?? "Title not found"}
                </DialogTitle>
                <DialogDescription
                  disableLayoutAnimation
                  variants={{
                    initial: { opacity: 0, scale: 0.8, y: 100 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.8, y: 100 },
                  }}
                >
                  {item.description}
                  <Link
                    className="mt-2 inline-flex text-zinc-500 underline"
                    href={item._id}
                    rel="noopener noreferrer"
                  >
                    More details
                  </Link>
                </DialogDescription>
              </div>
              <DialogClose className="text-zinc-50" />
            </DialogContent>
          </DialogContainer>
        </Dialog>
      )}
    </div>
  );
}

export default DialogProject;
