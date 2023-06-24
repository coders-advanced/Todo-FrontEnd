import { create } from "zustand";

export const useEditNote = create((set) => ({
  isEditing: false,
  setIsEditing: () => set((state: any) => ({ isEditing: !state.isEditing })),
}));
