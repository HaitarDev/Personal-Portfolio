import { create } from "zustand";

interface ProjectModalState {
  images: string[];
  addImages: (images: string[]) => void;
}

const useShowProjectImages = create<ProjectModalState>((set) => ({
  images: [],
  addImages: (images) => set(() => ({ images: images })),
}));

export default useShowProjectImages;
