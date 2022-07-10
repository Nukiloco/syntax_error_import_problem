/** @type {import('houdini').ConfigFile} */
const config = {
	framework: 'kit',
	module: 'esm',
	schemaPath: 'src/lib/server/modules/**/schema/*.gql',
	sourceGlob: 'src/routes/**/*.{svelte,gql}',
	scalars: {
		// Houdini will help you with this part when you will `generate`
		// No worries 😉
	}
};

export default config;