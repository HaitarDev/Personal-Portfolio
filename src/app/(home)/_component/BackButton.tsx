"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

function BackButton({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <Button variant={"ghost"} className="fixed" onClick={() => router.back()}>
      {children}
    </Button>
  );
}

export default BackButton;
