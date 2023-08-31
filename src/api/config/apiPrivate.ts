import axios from 'axios'

import type { AxiosError, AxiosInstance } from 'axios'

import { apiUrl } from '@constants'
import { getAccessToken } from '@utils'
import { hdlErrors } from '@helpers'
import { refresh } from '@api'

export const apiPrivate: AxiosInstance = axios.create({
	baseURL: apiUrl,
	headers: {
		'Content-Type': 'application/json',
	},
})

apiPrivate.interceptors.request.use(
	config => {
		const access = getAccessToken()

		if (access) {
			config.headers['Authorization'] = `Bearer ${access}`
		}

		return config
	},
	error => {
		return Promise.reject(error)
	}
)

apiPrivate.interceptors.response.use(
	res => {
		return res
	},
	async err => {
		const originalConfig = err.config

		if (err.response) {
			if (err.response.status === 401 && !originalConfig._retry) {
				originalConfig._retry = true

				try {
					const { access } = await refresh()

					localStorage.setItem('access', access)

					apiPrivate.defaults.headers.common[
						'Authorization'
					] = `Bearer ${access}`

					return apiPrivate(originalConfig)
				} catch (error) {
					const err = error as AxiosError

					localStorage.clear()

					hdlErrors(err)

					// TODO: Change route
					// window.location.href = '/login'

					if (err.response && err.response.data) {
						return Promise.reject(err.response.data)
					}

					return Promise.reject(err)
				}
			}

			if (err.response.status === 403 && err.response.data) {
				return Promise.reject(err.response.data)
			}

			if (err.response.status === 500 && err.response.data) {
				return
			}
		}

		return Promise.reject(err)
	}
)
