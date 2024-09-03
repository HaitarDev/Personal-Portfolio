import { ReactNode } from "react";

export const ProjectOne = () => {
  return (
    <div>
      <p className="font-bold text-lg text-white">House in the woods</p>
      <p className="font-normal text-sm text-white"></p>
      <p className="font-normal text-sm my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

export const ProjectTwo = () => {
  return (
    <div>
      <p className="font-bold text-lg text-white">House in the woods</p>
      <p className="font-normal text-sm text-white"></p>
      <p className="font-normal text-sm my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

export const ProjectThree = () => {
  return (
    <div>
      <p className="font-bold text-lg text-white">House in the woods</p>
      <p className="font-normal text-sm text-white"></p>
      <p className="font-normal text-sm my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

export const ProjectFour = () => {
  return (
    <div>
      <p className="font-bold text-lg text-white">House in the woods</p>
      <p className="font-normal text-sm text-white"></p>
      <p className="font-normal text-sm my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

// export interface Project {
//   id: number;
//   title?: string;
//   description?: string;
//   content: ReactNode | string;
//   className: string;
//   thumbnail: string[];
//   video?: string;
//   href: string;
// }

export const projects: Project[] = [
  {
    id: 1,
    title: "Title project 1 ",
    description:
      "Description title project 1 Description title project 1 Description title project 1 Description title project 1 Description title project 1 Description title project 1",

    content: <ProjectOne />,
    className: "",
    thumbnail: ["/13.jpg", "/noise.png", "/13.jpg"],
    href: "projects/1",
  },
  {
    id: 2,
    content: <ProjectTwo />,
    className: "",
    thumbnail: ["/13.jpg", "/noise.png", "/13.jpg"],
    href: "projects/2",
  },
  {
    id: 3,
    content: <ProjectThree />,
    className: "",
    thumbnail: ["/noise.png", "/13.jpg", "/13.jpg"],
    href: "projects/3",
  },
  {
    id: 4,
    content: <ProjectFour />,
    className: "",
    thumbnail: ["/13.jpg", "/noise.png", "/13.jpg"],
    href: "projects/4",
  },
];
