import { cva, type VariantProps } from "class-variance-authority";
import React, { ReactNode } from "react";

const labelVariants = cva(
	"inline-flex items-center h-[24px] justify-center rounded-[6px] px-[6px] text-[12px] font-bold transition-colors gap-[6px]",
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
			class: "bg-grey-800 text-white",
		},
		{
			variant: "filled",
			labelColor: "primary",
			class: "bg-primary-main text-white",
		},
		{
			variant: "filled",
			labelColor: "secondary",
			class: "bg-secondary-main text-white",
		},
		{
			variant: "filled",
			labelColor: "info",
			class: "bg-info-main text-white",
		},
		{
			variant: "filled",
			labelColor: "success",
			class: "bg-success-main text-white",
		},
		{
			variant: "filled",
			labelColor: "warning",
			class: "bg-warning-main text-grey-800",
		},
		{
			variant: "filled",
			labelColor: "error",
			class: "bg-error-main text-white",
		},
		{
			variant: "outlined",
			labelColor: "default",
			class: "border-grey-800 text-grey-800",
		},
		{
			variant: "outlined",
			labelColor: "primary",
			class: "border-primary-main text-primary-main",
		},
		{
			variant: "outlined",
			labelColor: "secondary",
			class: "border-secondary-main text-secondary-main",
		},
		{
			variant: "outlined",
			labelColor: "info",
			class: "border-info-main text-info-main",
		},
		{
			variant: "outlined",
			labelColor: "success",
			class: "border-success-main text-success-main",
		},
		{
			variant: "outlined",
			labelColor: "warning",
			class: "border-warning-main text-warning-main",
		},
		{
			variant: "outlined",
			labelColor: "error",
			class: "border-error-main text-error-main",
		},
		{
			variant: "soft",
			labelColor: "default",
			class: "bg-grey-transparent16 text-grey-600",
		},
		{
			variant: "soft",
			labelColor: "primary",
			class: "bg-primary-transparent16 text-primary-dark",
		},
		{
			variant: "soft",
			labelColor: "secondary",
			class: "bg-secondary-transparent16 text-secondary-dark",
		},
		{
			variant: "soft",
			labelColor: "info",
			class: "bg-info-transparent16 text-info-dark",
		},
		{
			variant: "soft",
			labelColor: "success",
			class: "bg-success-transparent16 text-success-dark",
		},
		{
			variant: "soft",
			labelColor: "warning",
			class: "bg-warning-transparent16 text-warning-dark",
		},
		{
			variant: "soft",
			labelColor: "error",
			class: "bg-error-transparent16 text-error-dark",
		},
    ],
    defaultVariants: {
		variant: "filled",
		labelColor: "default",
    },
}
);

interface LabelProps
	extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof labelVariants> {
	children: ReactNode;
	iconBefore?: ReactNode;
	iconAfter?: ReactNode;
}

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
		<div 
			className={labelVariants({ variant, labelColor, className })}
			data-testid="Label"
			{...props}
		>
			{iconBefore && <span>{iconBefore}</span>}
			<span className="leading-[2]">
				{children}
			</span>
			{iconAfter && <span>{iconAfter}</span>}
		</div>
	);
};

Label.displayName = 'Label';

export { Label, labelVariants };
