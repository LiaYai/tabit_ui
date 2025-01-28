import { Switch, SwitchProps } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

type SwitchElementProps = SwitchProps & {
	id?: string;
	label?: string;
};

export const SwitchElement = ({ id, label, ...props }: SwitchElementProps) => {
	return (
		<div className="flex items-center">
			<Switch id={id} {...props} />
			{label && <Label htmlFor={id}>{label}</Label>}
		</div>
	);
};
