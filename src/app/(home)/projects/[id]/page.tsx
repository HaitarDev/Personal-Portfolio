import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Project } from "@/types/sanity.types";

import { PortableText } from "next-sanity";
import Image from "next/image";
import BackButton from "../../_component/BackButton";
import { ArrowLeftIcon } from "lucide-react";

async function ProjectPage({ params }: { params: { id: string } }) {
  const query = `*[_id == "${params.id}"][0]`;

  const project: Project = await client.fetch(query, {}, { cache: "no-store" });

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-24 flex flex-col gap-5 ">
      <div className="relative">
        <div className="absolute">
          <BackButton>
            <ArrowLeftIcon />
            back
          </BackButton>
        </div>
      </div>

      <div className="max-w-screen-sm lg:max-w-screen-sm mx-auto">
        <h1 className="font-semibold text-4xl">{project.title}</h1>
        <h5 className="text-gray-400">{project.description}</h5>
      </div>
      <div className="mx-auto">
        <Image
          priority
          className="rounded-lg border"
          width={700}
          height={700}
          src={urlFor(project.images[0]).url()}
          alt={project.title}
        />
      </div>
      <div className="max-w-screen-sm lg:max-w-screen-sm mx-auto">
        <PortableText value={project.content} />
      </div>
    </div>
  );
}

export default ProjectPage;
