import { FileInput } from '@/components/ui/input';

export function FileInputDemo() {
	return (
		<div className="grid w-full max-w-sm items-center gap-1.5">
			<FileInput id="picture" type="file" />
		</div>
	);
}
