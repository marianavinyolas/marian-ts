import { apiPublic } from '@api'

import type { ILoginParams } from '@interfaces'

export const login = async ({ email, password, username }: ILoginParams) => {
	const { data } = await apiPublic.post('/auth/login', {
		email,
		password,
		username,
	})

	return data
}
