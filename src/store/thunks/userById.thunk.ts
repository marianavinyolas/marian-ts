import { createAsyncThunk } from '@reduxjs/toolkit'

import { userById } from '@api'

interface IUserByIdThunkParams {
	id: string
}

export const userByIdThunk = createAsyncThunk(
	'user/setUser',
	async ({ id }: IUserByIdThunkParams) => {
		return await userById({ id })
	}
)
