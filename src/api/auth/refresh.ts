import { apiPublic } from '@api'
import { getRefreshToken } from '@utils'

export const refresh = async () => {
	const refresh = getRefreshToken()

	const { data } = await apiPublic.post('/auth/refresh/', { refresh })

	return data
}
