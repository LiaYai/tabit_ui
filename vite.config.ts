/// <reference types="vitest" />

import libAssetsPlugin from '@laynezh/vite-plugin-lib-assets';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			'@public': resolve(__dirname, './public'),
			'@styles': resolve(__dirname, './scss'),
		},
	},
	plugins: [
		react(),
		libInjectCss(),
		dts({
			tsconfigPath: 'tsconfig.app.json',
			include: ['src/**/*.{ts,tsx}'],
			exclude: ['node_modules', 'src/stories', '**/*.stories.*', '**/*.test.*'],
			entryRoot: 'src',
		}),
		libAssetsPlugin({
			include: /\.(eot|woff2?|ttf)(\?.*)?(#.*)?$/,
			name: 'fonts/[name].[ext]',
		}),
		libAssetsPlugin({
			include: /\.(svg)(\?.*)?(#.*)?$/,
			name: 'svg/[name].[ext]',
		}),
		libAssetsPlugin({
			include: /\.(png|jpeg|jpg|gif|webp)(\?.*)?(#.*)?$/,
			name: 'images/[name].[ext]',
		}),
	],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/setupTests.ts',
		include: ['src/**/*.{spec,test}.ts{,x}'],
		coverage: {
			include: ['src/components/**/*.ts{,x}'],
			exclude: ['src/components/**/*.stories.*'],
		},
	},
	build: {
		copyPublicDir: false,
		lib: {
			entry: resolve(__dirname, 'src/index.tsx'),
			formats: ['es'],
			fileName: 'index',
			cssFileName: 'index',
		},
		sourcemap: true,
		minify: true,
		rollupOptions: {
			manualChunks: {
				vendor: ['react', 'react-dom'],
			},
			external: ['react', 'react-dom', 'react/jsx-runtime'],
			output: {
				assetFileNames: 'assets/[name].[ext]',
			},
		},
	},
});
