import Image from "next/image";
import HomeGrid from "./_component/HomeGrid";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="p-24 max-w-screen-sm lg:max-w-screen-sm mx-auto ">
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
          <p className="text-muted-foreground">
            Hey there! I&apos;m Haitar. With over 3 years of hands-on experience
            in both front-end and backend development, I&apos;ve been tinkering
            with websites to make them look good and work seamlessly. I
            didn&apos;t start with a formal education in this field; I&apos;ve
            learned the ropes through trial and error, lots of Google searches,
            and endless cups of coffee. My journey as a self-taught developer
            has been filled with challenges, but it&apos;s taught me the value
            of persistence and continuous learning. I&apos;ve had the pleasure
            of working with some amazing clients who&apos;ve left me glowing
            feedback.
          </p>
          <Separator />
        </HomeGrid>
        {/* Expertise */}
        <HomeGrid title="Expertise ">
          <p className="text-muted-foreground">
            -javascript -typescript -tailwindCss -react -nextJs -mongoDB
            -postgresql -nodeJs -expressJs -prisma -drizzle -supabase
          </p>
          <Separator />
        </HomeGrid>
        {/* Projects */}

        {/* Blogs */}

        {/* Social media */}
      </div>
    </div>
  );
}
