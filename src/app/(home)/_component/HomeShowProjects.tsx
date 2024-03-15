"use client";
import { projects } from "@/components/projects-ui";
import SpringModal from "@/components/spring-modal";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { useState } from "react";
import ProjectImagesSlider from "./ProjectImagesSlider";

function HomeShowProjects() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {projects.map((item) => (
        <div onClick={() => setIsOpen(true)} key={item.id}>
          <DirectionAwareHover
            className={item.className}
            imageUrl={item.thumbnail[0]}
          >
            {item.content}
          </DirectionAwareHover>
          <SpringModal isOpen={isOpen} setIsOpen={setIsOpen}>
            <ProjectImagesSlider images={item.thumbnail} />
          </SpringModal>
        </div>
      ))}
    </>
  );
}
export default HomeShowProjects;
