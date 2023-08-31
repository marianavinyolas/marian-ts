import { createBrowserRouter } from 'react-router-dom'

import {
	AuthPage,
	ErrorPage,
	HomePage,
	MarketingPage,
	PrivacyPolicyPage,
	TermsConditionsPage,
} from '@pages'
import { PrivateLayout, PublicLayout } from '@layouts'

const Router = createBrowserRouter([
	{
		path: '/',
		element: <PrivateLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
		],
	},
	{
		path: '/auth',
		element: <PublicLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <AuthPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: 'privacy-policy',
				element: <PrivacyPolicyPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: 'marketing',
				element: <MarketingPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: 'terms-conditions',
				element: <TermsConditionsPage />,
				errorElement: <ErrorPage />,
			},
		],
	},
])

export default Router
