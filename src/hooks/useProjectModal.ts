import { create } from "zustand";

interface ProjectModalState {
  isOpen: boolean;
  setIsOpen: () => void;
}
const useProjectModal = create<ProjectModalState>((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useProjectModal;
