import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const textVariants: (props?: ({
    variant?: "small" | "h1" | "h2" | "h3" | "h4" | "p" | "lead" | "large" | "muted" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small' | 'div';
export interface TextProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
    asChild?: boolean;
    as?: TextElement;
}
declare const Text: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLElement>>;
export { Text, textVariants };
