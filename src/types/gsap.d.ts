declare module "gsap/SplitText" {
  export class SplitText {
    constructor(target: any, options: any);
    chars: HTMLElement[];
    lines: HTMLElement[];
    words: HTMLElement[];
    revert(): void;
  }
}

declare module "gsap/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars: any): ScrollSmoother;
    static refresh(value?: boolean): void;
    paused(value: boolean): void;
    scrollTop(value?: number): number | void;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    refresh(): void;
    kill(): void;
  }
}
