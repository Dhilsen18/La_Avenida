declare module 'framer-motion' {
  import { ComponentType, HTMLAttributes } from 'react';
  
  export interface MotionProps extends HTMLAttributes<HTMLElement> {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    viewport?: any;
    style?: any;
    onClick?: () => void;
    href?: string;
    target?: string;
    rel?: string;
    type?: string;
    disabled?: boolean;
  }
  
  export const motion: {
    div: ComponentType<MotionProps>;
    section: ComponentType<MotionProps>;
    h1: ComponentType<MotionProps>;
    h2: ComponentType<MotionProps>;
    h3: ComponentType<MotionProps>;
    p: ComponentType<MotionProps>;
    span: ComponentType<MotionProps>;
    button: ComponentType<MotionProps>;
    a: ComponentType<MotionProps>;
  };
  
  export const AnimatePresence: ComponentType<any>;
}

