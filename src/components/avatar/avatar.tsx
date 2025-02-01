import { cn } from '@/lib/utils';

export type AvatarProps = {
	src: string;
	alt?: string;
	size?: 'xxs' | 'xs' | 's' | 'm' |  'l' | 'xl' | 'xxl' | 'xxxl';
	shape?: 'circle' | 'squircle' | 'square';
	className?: string;
};

export function Avatar({ src, alt, size = 'm', shape = 'circle', className }: AvatarProps) {
	return (
		<div
			className={cn('relative', className, {
				'w-6 h-6': size === 'xxs',
				'w-8 h-8': size === 'xs',
				'w-10 h-10': size === 's',
				'w-12 h-12': size === 'm',
				'w-16 h-16': size === 'l',
				'w-20 h-20': size === 'xl',
				'w-24 h-24': size === 'xxl',
				'w-32 h-32': size === 'xxxl',
				'rounded-full': shape === 'circle',
				'rounded-md': shape === 'squircle',
				'rounded-br-none': shape === 'square'
			})}
			data-testid="Avatar"
		>
			<img src={src} alt={alt ?? "Avatar"} className={cn('object-cover', {'rounded-full': shape === 'circle', 'rounded-md': shape === 'squircle', 'rounded-br-none': shape === 'square'})}/>
		</div>
	);
}
