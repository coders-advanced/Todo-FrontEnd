import { create } from "zustand";

export const useModalNote = create((set) => ({
  isOpenModal: false,
  setIsOpenModal: () =>
    set((state: any) => ({ isOpenModal: !state.isOpenModal })),
}));
