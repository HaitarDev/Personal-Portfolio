"use client";

import ProjectModal from "@/components/ProjectModal";
import useShowProjectImages from "@/hooks/useShowProjectImages";
import { useEffect, useState } from "react";

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);
  const { images } = useShowProjectImages();

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return <ProjectModal images={images} />;
}
export default ModalProvider;
