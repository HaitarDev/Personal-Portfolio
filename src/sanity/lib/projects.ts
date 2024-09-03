import { Project } from "@/types/sanity.types";
import { client } from "./client";

export async function getProjects() {
  const query =
    '*[_type == "projects"]{_id,title,description,videoPreview,images,startDate,endDate}';

  const data = await client.fetch(query);

  return data as Project[];
}
