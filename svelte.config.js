import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'public',
		}),
	},
}

export default config
