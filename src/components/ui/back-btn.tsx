"use client";

import { ArrowLeft } from "lucide-react";

function Backbtn() {
  return (
    <button
      onClick={() => window.history.back()}
      className="absolute md:-left-24 sm:-left-12 hidden sm:block top-1/2 -translate-y-1/2  cursor-pointer p-1 rounded-full border hover:bg-gray-100/55 transition-colors text-gray-500"
    >
      <ArrowLeft />
    </button>
  );
}
export default Backbtn;
