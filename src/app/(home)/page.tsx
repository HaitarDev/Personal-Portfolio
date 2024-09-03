import Image from "next/image";
import HomeGrid from "./_component/HomeGrid";
import { Separator } from "@/components/ui/separator";
import { aboutMe, expertise } from "@/lib/aboutMeInfo";

import HomeShowProjects from "./_component/HomeShowProjects";
import ContactMe from "./_component/ContactMe";

export default function Home() {
  return (
    <div className="relative p-24 max-w-screen-sm lg:max-w-screen-sm mx-auto">
      <div className="flex flex-col gap-8">
        <div className="flex ">
          <div className="flex gap-4 items-center">
            <div>
              <Image
                className="rounded-full object-cover aspect-square"
                src={"/13.jpg"}
                width={90}
                height={90}
                alt="me"
              />
            </div>
            <div className="flex justify-between leading-tight flex-col">
              <h1 className="text-lg font-medium  tracking-wide">
                Haitar Abdelmoghith
              </h1>

              <p className="text-muted-foreground">Full Stack Developer</p>
            </div>
          </div>
        </div>

        {/* about */}
        <div className="flex flex-col gap-4">
          <h2 className="text-base font-medium traacking-wide"></h2>
        </div>
        <HomeGrid title="About me !">
          <div className="text-muted-foreground">{aboutMe}</div>
          <Separator />
        </HomeGrid>
        {/* Expertise */}
        <HomeGrid title="Expertise ">
          <ul className="text-muted-foreground list-disc">
            {expertise.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Separator />
        </HomeGrid>

        {/* Projects */}
        <HomeGrid title="Random projects">
          <HomeShowProjects />
          <Separator />
        </HomeGrid>
        {/* Blogs */}
        {/* <HomeGrid title="Random posts">
          <HomeShowPosts posts={latestPosts} />
          <Separator />
        </HomeGrid> */}

        {/* Contact me  */}
        <HomeGrid title="Contact me">
          <ContactMe />
          <Separator />
        </HomeGrid>
      </div>
    </div>
  );
}
