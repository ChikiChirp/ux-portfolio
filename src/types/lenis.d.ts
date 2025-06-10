import type Lenis from "lenis";

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

// Extend the Window interface to include Lenis
declare module "lenis" {
  interface Lenis {
    scroll: number;
    scrollTo: (target: string | number | HTMLElement, options?: any) => void;
    on: (event: string, callback: Function) => void;
    off: (event: string, callback: Function) => void;
  }
}

export {};
