import { useQuery } from '@tanstack/react-query'

import type { UseQueryResult } from '@tanstack/react-query'

import { userById } from '@api'

import type { IUseUserByIdQueryParams, IUser } from '@interfaces'

export const useUserByIdQuery = ({
	id,
}: IUseUserByIdQueryParams): UseQueryResult => {
	const user = useQuery<IUser>(['user', id], () => userById({ id }))

	return { ...user }
}
