import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { uiInitialState } from '@helpers'

import type { IUIState, TUITheme } from '@interfaces'

const INITIAL_STATE: IUIState = {
	...uiInitialState(),
}

export const uiSlice = createSlice({
	name: 'ui',
	initialState: INITIAL_STATE,
	reducers: {
		setTheme: (_state, { payload }: PayloadAction<TUITheme>) => {
			document.getElementsByTagName('html')[0].classList.remove('dark', 'light')
			document.getElementsByTagName('html')[0].classList.add(payload)

			_state.currentTheme = payload
		},
	},
})

export const { setTheme } = uiSlice.actions
