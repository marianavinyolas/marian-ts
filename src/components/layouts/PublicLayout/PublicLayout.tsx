import { Outlet } from 'react-router-dom'

import styles from './PublicLayout.module.sass'

export const PublicLayout = () => {
	return (
		<section className={styles['wrapper']}>
			<Outlet />
		</section>
	)
}
