import { apiPrivate } from '@api'

import type { IUser, IUserByIdParams } from '@interfaces'

export const userById = async ({ id }: IUserByIdParams): Promise<IUser> => {
	const { data } = await apiPrivate.get<IUser>('/auth/login', {
		params: { id },
	})

	return data
}
