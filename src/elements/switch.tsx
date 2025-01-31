import { Switch, SwitchProps } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import React from 'react';

type SwitchElementProps = SwitchProps & {
	id?: string;
	label?: string;
};

export const SwitchElement = ({ id, label, ...props }: SwitchElementProps) => {
	const generatedId = React.useId();
	const switchId = id || generatedId;
	return (
		<div className="flex items-center gap-2">
			<Switch data-testid="Switch" id={switchId} aria-labelledby={label ? `${switchId}-label` : undefined} {...props} />
			{label && <Label id={`${switchId}-label`} htmlFor={switchId}>{label}</Label>}
		</div>
	);
};
