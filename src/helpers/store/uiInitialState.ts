import type { IUIState, TUITheme } from '@interfaces'

export const uiInitialState = (): IUIState => {
	const currentTheme = localStorage.getItem('currentTheme') as TUITheme

	document.getElementsByTagName('html')[0].classList.remove('dark', 'light')
	document
		.getElementsByTagName('html')[0]
		.classList.add(currentTheme ?? 'light')

	return {
		currentTheme: currentTheme ?? 'light',
	}
}
