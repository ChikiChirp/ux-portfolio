import type Lenis from "lenis";

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

// Extend the Window interface to include Lenis
declare module "lenis" {
  interface LenisScrollOptions {
    offset?: number;
    duration?: number;
    easing?: (t: number) => number;
    immediate?: boolean;
    lock?: boolean;
    force?: boolean;
    onComplete?: () => void;
  }

  interface Lenis {
    scroll: number;
    scrollTo: (target: string | number | HTMLElement, options?: LenisScrollOptions) => void;
    on: (event: string, callback: (args?: unknown) => void) => void;
    off: (event: string, callback: (args?: unknown) => void) => void;
  }
}

export {};
