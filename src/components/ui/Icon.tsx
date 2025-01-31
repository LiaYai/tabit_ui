import React, { FC, memo } from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
	component: React.FC<React.SVGProps<SVGSVGElement>>; // SVG-компонент
	size?: number | string; // Размер иконки
	color?: string; // Цвет иконки
}

const Icon: FC<IconProps> = ({
	component: SvgComponent,
	size = 24,
	color = 'currentColor',
	style,
	...props
}) => {
	return (
		<SvgComponent
			width={size}
			height={size}
			fill={color}
			style={{ ...style, width: size, height: size }}
			{...props}
		/>
	);
};

export default memo(Icon);
