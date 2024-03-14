"use client";
import { navItems } from "@/lib/navItems";
import Link from "next/link";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./toggle-theme";

function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed  top-0 left-0 right-0 bottom-0 min-h-screen border-r border-gray-200 w-14 flex flex-col items-center justify-center gap-8">
      {navItems.map((item) => (
        <div key={item.name}>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Link
                href={item.href ? item.href : ""}
                className={cn("text-gray-500", {
                  "text-violet-600": pathname === item.href,
                })}
              >
                {item.icon}
              </Link>
            </HoverCardTrigger>
            <HoverCardContent
              side="right"
              className="text-sm text-center  bg-black text-white w-fit p-0 px-2 py-1"
            >
              {item.name}
            </HoverCardContent>
          </HoverCard>
        </div>
      ))}
      <ModeToggle />
    </div>
  );
}
export default Sidebar;
