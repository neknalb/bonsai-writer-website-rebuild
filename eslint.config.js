import prettier from 'eslint-config-prettier'
import js from '@eslint/js'
import { includeIgnoreFile } from '@eslint/compat'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'
import { fileURLToPath } from 'node:url'
import ts from 'typescript-eslint'
import svelteConfig from './svelte.config.js'

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url))

export default ts.config(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...ts.configs.recommendedTypeChecked,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	{
		ignores: ['eslint.config.js'],
	},
	{
		files: ['**/*.js', '**/*.ts'],
		ignores: ['**/*.test.ts', 'tests/'],
		name: 'Specials for JS and TS files',
		languageOptions: {
			parserOptions: {
				projectService: true,
				project: './tsconfig.json',
			},
		},
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		name: 'Specials for Svelte files',
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig,
			},
		},
	},
	{
		rules: {
			eqeqeq: 'error',
			'@typescript-eslint/no-unused-vars': 'error',
			'prefer-const': 'error',
			// 'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
			// 'no-console': 'error',
		},
	},
	{
		files: ['src/**/*.test.ts'],
		name: 'Specials for test files',
		languageOptions: {
			parserOptions: {
				projectService: true,
				project: './tsconfig.json',
			},
		},
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'no-console': 'off',
			'no-unsafe-assignement': 'off',
		},
	},
	{
		files: ['tests/**/*.ts', 'tests/*.ts'],
		name: 'Specials for e2e tests',
		languageOptions: {
			parserOptions: {
				project: 'tests/tsconfig.e2e.json',
			},
		},
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-floating-promises': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'no-console': 'off',
			'no-unsafe-assignement': 'off',
		},
	},
)
