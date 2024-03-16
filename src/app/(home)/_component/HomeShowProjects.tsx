"use client";
import { Project, projects } from "@/components/projects-ui";
import SpringModal from "@/components/spring-modal";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { useState } from "react";
import ProjectImagesSlider from "./ProjectImagesSlider";

function HomeShowProjects() {
  const [isOpen, setIsOpen] = useState(false);

  const getRandomElements = (arr: Project[]) => {
    const randomIndex1 = Math.floor(Math.random() * arr.length);
    let randomIndex2 = Math.floor(Math.random() * arr.length);

    while (randomIndex1 === randomIndex2) {
      randomIndex2 = Math.floor(Math.random() * arr.length);
    }

    return [arr[randomIndex1], arr[randomIndex2]];
  };

  const newRandomArr = getRandomElements(projects);

  return (
    <>
      {newRandomArr.map((item) => (
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
