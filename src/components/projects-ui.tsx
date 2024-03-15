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

interface Project {
  id: number;
  content: ReactNode | string;
  className: string;
  thumbnail: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    content: <ProjectOne />,
    className: "md:col-span-2",
    thumbnail: ["/13.jpg", "/noise.png", "/13.jpg"],
  },
  {
    id: 2,
    content: <ProjectTwo />,
    className: "col-span-1",
    thumbnail: ["/13.jpg", "/noise.png", "/13.jpg"],
  },
  {
    id: 3,
    content: <ProjectThree />,
    className: "col-span-1",
    thumbnail: ["/13.jpg", "/noise.png", "/13.jpg"],
  },
  {
    id: 4,
    content: <ProjectFour />,
    className: "md:col-span-2",
    thumbnail: ["/13.jpg", "/noise.png", "/13.jpg"],
  },
];
