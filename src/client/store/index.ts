import { create } from "zustand";

interface MariobookStore {
    color: string,
    setColor: (color:string) => void,
    scale: number,
    setScale: (scale:number) => void
}

const useMariobookStore = create<MariobookStore>((set) => ({
    color: '#2e2C2E',
    setColor: (color) => set({ color }),

    scale: 0.08,
    setScale: (scale) => set({ scale }),

    reset: () => set({ color: '#2e2C2E', scale: 0.08 }),
}))

export default useMariobookStore