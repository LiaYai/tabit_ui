import clsx from 'clsx';
import styles from './Button.module.scss';

export type ButtonProps = {
	className?: string;
};

export function Button({ className }: ButtonProps) {
	return (
		<div className={clsx(styles.container, className)} data-testid="Button">
			Button
		</div>
	);
}
