import axios from 'axios'

import type { AxiosInstance } from 'axios'

import { apiUrl } from '@constants'

export const apiPublic: AxiosInstance = axios.create({
	baseURL: apiUrl,
	withCredentials: false,
})
