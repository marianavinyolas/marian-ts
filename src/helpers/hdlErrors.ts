import { toast } from 'react-hot-toast'

import type { AxiosError } from 'axios'

export const hdlErrors = (err: AxiosError) => {
	const { response, request } = err

	if (request.status === 500) {
		toast.error('Server Error')

		return
	}

	if (!response || !response.data) {
		toast.error('Network Error')

		return
	}

	if (response?.data && request.status !== 500) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		Object.entries(response.data).forEach(([, value]) => {
			value.toLowerCase().includes('html')
				? toast.error('Network Error')
				: toast.error(`${value}`)
		})
	}
}
