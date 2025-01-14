import { default as React } from '../../../.yarn/cache/react-npm-18.3.1-af38f3c1ae-261137d3f3.zip/node_modules/react';
export type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
};
export declare function Button({ type, onClick, disabled, children, }: ButtonProps): import("react/jsx-runtime").JSX.Element;
