import type { IIconProps } from './Icons.interfaces'

export const IcSun = ({ className }: IIconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className={className}
		viewBox='0 0 24 24'
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<path d='M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
		<path d='M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5z' />
	</svg>
)
