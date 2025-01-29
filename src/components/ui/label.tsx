import { cva, type VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";

const labelStyle = {
	'--default-text': 'hsla(0, 0%, 100%, 1)',
	'--default': 'hsla(211, 24%, 17%, 1)',
	'--primary': 'hsla(220, 100%, 54%, 1)',
	'--secondary': 'hsla(267, 100%, 60%, 1)',
	'--info': 'hsla(189, 100%, 43%, 1)',
	'--success': 'hsla(142, 71%, 45%, 1)',
	'--warning': 'hsla(40, 100%, 50%, 1)',
	'--error': 'hsla(11, 100%, 59%, 1)',
	'--default-opacity': 'hsla(210, 13%, 62%, 0.16)',
	'--primary-opacity': 'hsla(220, 100%, 54%, 0.16)',
	'--secondary-opacity': 'hsla(267, 100%, 60%, 0.16)',
	'--info-opacity': 'hsla(189, 100%, 43%, 0.16)',
	'--success-opacity': 'hsla(142, 71%, 45%, 0.16)',
	'--warning-opacity': 'hsla(40, 100%, 50%, 0.16)',
	'--error-opacity': 'hsla(11, 100%, 59%, 0.16)',
	'--default-opacity-text': 'hsla(208, 13%, 45%, 1)',
	'--primary-opacity-text': 'hsla(220, 98%, 44%, 1)',
	'--secondary-opacity-text': 'hsla(261, 76%, 41%, 1)',
	'--info-opacity-text': 'hsla(198, 100%, 31%, 1)',
	'--success-opacity-text': 'hsla(154, 78%, 31%, 1)',
	'--warning-opacity-text': 'hsla(36, 100%, 36%, 1)',
	'--error-opacity-text': 'hsla(2, 77%, 41%, 1)',
} as React.CSSProperties;

const labelVariants = cva(
	"inline-flex items-center font-manrope h-[24px] justify-center rounded-[6px] px-[6px] py-[2px] text-[12px] font-bold leading-[20px] transition-colors gap-[6px]",
{
    variants: {
		variant: {
			filled: "",
			outlined: "border-[2px] bg-transparent",
			soft: "border-transparent",
		},
		labelColor: {
			default: "",
			primary: "",
			secondary: "",
			info: "",
			success: "",
			warning: "",
			error: "",
		}
    },
    compoundVariants: [
		{
			variant: "filled",
			labelColor: "default",
			class: "bg-[var(--default)] text-[var(--default-text)]",
		},
		{
			variant: "filled",
			labelColor: "primary",
			class: "bg-[var(--primary)] text-[var(--default-text)]",
		},
		{
			variant: "filled",
			labelColor: "secondary",
			class: "bg-[var(--secondary)] text-[var(--default-text)]",
		},
		{
			variant: "filled",
			labelColor: "info",
			class: "bg-[var(--info)] text-[var(--default-text)]",
		},
		{
			variant: "filled",
			labelColor: "success",
			class: "bg-[var(--success)] text-[var(--default-text)]",
		},
		{
			variant: "filled",
			labelColor: "warning",
			class: "bg-[var(--warning)] text-[var(--default)]",
		},
		{
			variant: "filled",
			labelColor: "error",
			class: "bg-[var(--error)] text-[var(--default-text)]",
		},
		{
			variant: "outlined",
			labelColor: "default",
			class: "border-[var(--default)] text-[var(--default)]",
		},
		{
			variant: "outlined",
			labelColor: "primary",
			class: "border-[var(--primary)] text-[var(--primary)]",
		},
		{
			variant: "outlined",
			labelColor: "secondary",
			class: "border-[var(--secondary)] text-[var(--secondary)]",
		},
		{
			variant: "outlined",
			labelColor: "info",
			class: "border-[var(--info)] text-[var(--info)]",
		},
		{
			variant: "outlined",
			labelColor: "success",
			class: "border-[var(--success)] text-[var(--success)]",
		},
		{
			variant: "outlined",
			labelColor: "warning",
			class: "border-[var(--warning)] text-[var(--warning)]",
		},
		{
			variant: "outlined",
			labelColor: "error",
			class: "border-[var(--error)] text-[var(--error)]",
		},
		{
			variant: "soft",
			labelColor: "default",
			class: "bg-[var(--default-opacity)] text-[var(--default-opacity-text)]",
		},
		{
			variant: "soft",
			labelColor: "primary",
			class: "bg-[var(--primary-opacity)] text-[var(--primary-opacity-text)]",
		},
		{
			variant: "soft",
			labelColor: "secondary",
			class: "bg-[var(--secondary-opacity)] text-[var(--secondary-opacity-text)]",
		},
		{
			variant: "soft",
			labelColor: "info",
			class: "bg-[var(--info-opacity)] text-[var(--info-opacity-text)]",
		},
		{
			variant: "soft",
			labelColor: "success",
			class: "bg-[var(--success-opacity)] text-[var(--success-opacity-text)]",
		},
		{
			variant: "soft",
			labelColor: "warning",
			class: "bg-[var(--warning-opacity)] text-[var(--warning-opacity-text)]",
		},
		{
			variant: "soft",
			labelColor: "error",
			class: "bg-[var(--error-opacity)] text-[var(--error-opacity-text)]",
		},
    ],
    defaultVariants: {
		variant: "filled",
		labelColor: "default",
    },
}
);

// Типы для пропсов
interface LabelProps
	extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof labelVariants> {
	children: ReactNode;
	iconBefore?: ReactNode; // Иконка перед текстом
	iconAfter?: ReactNode; // Иконка после текста
}

// Компонент Label
const Label = ({
	children,
	variant,
	labelColor,
	iconBefore,
	iconAfter,
	className,
	...props
}: LabelProps) => {
	return (
		<span
			className={labelVariants({ variant, labelColor, className })}
			style={labelStyle}
			data-testid="Label"
			{...props}
		>
			{iconBefore && <span>{iconBefore}</span>}
			{children}
			{iconAfter && <span>{iconAfter}</span>}
		</span>
	);
};


Label.displayName = 'Label';

export { Label, labelVariants };
