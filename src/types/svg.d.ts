declare module '*.svg' {
	import * as React from 'react';

	// Именованный экспорт для ReactComponent
	export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

	// Именованный экспорт для компонента React
	const content: React.FC<React.SVGProps<SVGSVGElement>>;
	export default content;
}
