import { configureStore } from '@reduxjs/toolkit'

import { localStorageMiddleware } from '@RTK/middlewares'

import { uiSlice } from '@RTK/slices'

const middleware = [localStorageMiddleware]

export const store = configureStore({
	reducer: {
		ui: uiSlice.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(...middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
