"use client";
import { Project, projects } from "@/components/projects-ui";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import ProjectModal from "@/components/ProjectModal";
import useProjectModal from "@/hooks/useProjectModal";
import useShowProjectImages from "@/hooks/useShowProjectImages";

function HomeShowProjects() {
  const { isOpen, setIsOpen } = useProjectModal();
  const { addImages } = useShowProjectImages();

  const getRandomElements = (arr: Project[]) => {
    const randomIndex1 = Math.floor(Math.random() * arr.length);
    let randomIndex2 = Math.floor(Math.random() * arr.length);

    while (randomIndex1 === randomIndex2) {
      randomIndex2 = Math.floor(Math.random() * arr.length);
    }

    return [arr[randomIndex1], arr[randomIndex2]];
  };

  const newRandomArr = getRandomElements(projects);

  const handleClickImage = (images: string[]) => {
    addImages(images);
    setIsOpen();
  };

  return (
    <>
      {newRandomArr.map((item) => (
        <div onClick={() => handleClickImage(item.thumbnail)} key={item.id}>
          <DirectionAwareHover
            className={item.className}
            imageUrl={item.thumbnail[0]}
          >
            {item.content}
          </DirectionAwareHover>
        </div>
      ))}
    </>
  );
}
export default HomeShowProjects;
