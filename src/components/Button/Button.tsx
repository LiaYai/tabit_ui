import React from 'react';

import styles from './Button.module.scss';

export type ButtonProps = {
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
	disabled?: boolean;
	children: React.ReactNode;
};

export function Button({
	type = 'button',
	onClick,
	disabled = false,
	children,
}: ButtonProps) {
	return (
		<button
			data-testid="Button"
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`${styles.button} ${disabled ? styles.disabled : ''}`}
		>
			{children}
		</button>
	);
}
