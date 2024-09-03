"use client";

import ProjectImagesSlider from "@/app/(home)/_component/ProjectImagesSlider";
import SpringModal from "./spring-modal";
import useProjectModal from "@/hooks/useProjectModal";

function ProjectModal({ images }: { images: string[] }) {
  const { isOpen, setIsOpen } = useProjectModal();

  return (
    <SpringModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ProjectImagesSlider images={images} />
    </SpringModal>
  );
}
export default ProjectModal;
