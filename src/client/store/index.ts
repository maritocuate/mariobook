import { create } from "zustand";

const useMariobookStore = create((set) => ({
    color: '#2e2C2E',
    setColor: (color: string) => set({ color }),

    scale: 0.08,
    setScale: (scale: number) => set({ scale }),

    reset: () => set({ color: '#2e2C2E', scale: 0.08 }),
}))

export default useMariobookStore