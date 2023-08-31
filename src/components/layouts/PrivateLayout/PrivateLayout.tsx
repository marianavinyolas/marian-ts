import { Outlet } from 'react-router-dom'

import { IcMoon, IcSun } from '@atoms'
import { setTheme } from '@RTK/slices'
import { useAppDispatch, useAppSelector } from '@hooks'

import styles from './PrivateLayout.module.sass'

export const PrivateLayout = () => {
	const { currentTheme } = useAppSelector(state => state.ui)

	const dispatch = useAppDispatch()

	const hdlThemeChange = () => {
		dispatch(setTheme(currentTheme === 'light' ? 'dark' : 'light'))
	}

	return (
		<section className={styles['wrapper']}>
			<header />
			<Outlet />
			<footer />
			<button
				className='w-10 h-10 inline-grid place-items-center p-2 rounded-full fixed bottom-4 right-4'
				onClick={hdlThemeChange}
				style={{ boxShadow: 'inset 0 0 15px -8px' }}
			>
				{currentTheme === 'light' ? (
					<IcMoon className='w-4 stroke-2 stroke-neutral-600' />
				) : (
					<IcSun className='w-5 stroke-1 stroke-white' />
				)}
			</button>
		</section>
	)
}
