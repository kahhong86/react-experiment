module.exports = {
	purge: [
		'./src/components/**/*.tsx',
		'./pages/**/*.tsx'],
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [
		require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' )
	]
}