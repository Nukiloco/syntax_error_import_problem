// import adapter from '@sveltejs/adapter-node'
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-node'
// import preprocess from 'svelte-preprocess'
import houdini from 'houdini/preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), houdini()],

	kit: {
		adapter: adapter(),
	}
}

export default config;
