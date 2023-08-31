import type { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit'

import type { RootState } from '@RTK/store'

export const localStorageMiddleware = (state: MiddlewareAPI) => {
	return (next: Dispatch) => (action: Action) => {
		next(action)

		if (action.type === 'ui/setTheme') {
			const { ui } = state.getState() as RootState

			localStorage.setItem('currentTheme', ui.currentTheme)
		}
	}
}
