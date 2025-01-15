import { Button, ButtonProps } from '@/components/ui/button';

const withButton = (props: ButtonProps) => {
	return () => <Button {...props} />;
};

export const OKAction = withButton({
	variant: 'outline',
	children: 'OK',
});

export const DeleteAction = withButton({
	variant: 'destructive',
	children: 'OK',
});
