import { StrictMode } from 'react'

import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import { store } from '@RTK/store'
import { Router } from '@router'

import '@styles/globals.sass'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<Provider store={store}>
			<QueryClientProvider client={client}>
				<RouterProvider router={Router} />

				<Toaster position='bottom-center' reverseOrder={false} />

				<ReactQueryDevtools />
			</QueryClientProvider>
		</Provider>
	</StrictMode>
)
