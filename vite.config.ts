import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: { port: 3000 },
	preview: { port: 3000 },
	resolve: {
		alias: {
			'@api': path.resolve(__dirname, './src/api/index.ts'),
			'@assets': path.resolve(__dirname, './src/assets/index.ts'),
			'@atoms': path.resolve(__dirname, './src/components/atoms/index.ts'),
			'@layouts': path.resolve(__dirname, './src/components/layouts/index.ts'),
			'@molecules': path.resolve(
				__dirname,
				'./src/components/molecules/index.ts'
			),
			'@organisms': path.resolve(
				__dirname,
				'./src/components/organisms/index.ts'
			),
			'@constants': path.resolve(__dirname, './src/constants/index.ts'),
			'@helpers': path.resolve(__dirname, './src/helpers/index.ts'),
			'@hooks': path.resolve(__dirname, './src/hooks/index.ts'),
			'@interfaces': path.resolve(__dirname, './src/utils/interfaces/index.ts'),
			'@pages': path.resolve(__dirname, './src/pages/index.ts'),
			'@router': path.resolve(__dirname, './src/router/index.ts'),
			'@RTK/store': path.resolve(__dirname, './src/store/index.ts'),
			'@RTK/middlewares': path.resolve(
				__dirname,
				'./src/store/middlewares/index.ts'
			),
			'@RTK/slices': path.resolve(__dirname, './src/store/slices/index.ts'),
			'@RTK/thunks': path.resolve(__dirname, './src/store/thunks/index.ts'),
			'@styles': path.resolve(__dirname, './src/styles/'),
			'@utils': path.resolve(__dirname, './src/utils/index.ts'),
		},
	},
})
