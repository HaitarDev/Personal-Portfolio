"use client";

import { Project } from "@/types/sanity.types";
import DialogProject from "./DialogProject";
import { getProjects } from "@/sanity/lib/projects";
import { useEffect, useState } from "react";

function HomeShowProjects() {
  const [projects, setProjects] = useState<Project[]>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const getRandomElements = (arr: Project[]) => {
    const randomIndex1 = Math.floor(Math.random() * arr.length);
    let randomIndex2 = Math.floor(Math.random() * arr.length);

    if (randomIndex1 == 0 && randomIndex2 == 0) {
      return [arr[randomIndex1]];
    }
    while (randomIndex1 === randomIndex2) {
      randomIndex2 = Math.floor(Math.random() * arr.length);
    }

    return [arr[randomIndex1], arr[randomIndex2]];
  };

  useEffect(() => {
    const findProjects = async () => {
      setLoading(true);
      const data = await getProjects();

      setProjects(data);
      setLoading(false);
    };
    findProjects();
  }, []);

  const newRandomArr = projects ? getRandomElements(projects) : null;
  return (
    <>
      {!newRandomArr && !isLoading ? (
        <div>There is no project yet!</div>
      ) : isLoading ? (
        <div>loading ...</div>
      ) : (
        newRandomArr?.map((item) => (
          <DialogProject key={item._id} item={item} />
        ))
      )}
    </>
  );
}
export default HomeShowProjects;
