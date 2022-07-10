import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path'
import watchAndRun from '@kitql/vite-plugin-watch-and-run'
// import adapter from '@sveltejs/adapter-node'
// import preprocess from 'svelte-preprocess'
// import houdini from 'houdini/preprocess'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		watchAndRun([
			{
				watch: '**/*.(svelte|gql|graphql|ts)',
				run: 'pnpm run gen' // to trigger the script "gen" of your package.json
				// delay: 300, Optional parameter to delay the run command.
				// name: 'kitql tools', Optional parameter to display a name in the terminal
			}
		]),
	],
	resolve: {
		alias: {
			"@lib": path.resolve('./src/lib'),
			"@houdini": path.resolve('.', '$houdini'),
		}
	},
	server: {
		fs: {
			allow: ['.']
		}
	},
};	

export default config;
