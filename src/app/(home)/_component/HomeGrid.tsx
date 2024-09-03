import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

function HomeGrid({ title, children }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-base font-medium traacking-wide">{title}</h2>
      {children}
    </div>
  );
}
export default HomeGrid;
