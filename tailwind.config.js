module.exports = {
	purge: [
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
      width:{
        '50': '12.5rem'
      },
      borderWidth: {
        '200': '200px',
		'48': '48px',
      }  
    },
	},
	variants: {},
	plugins: [
		require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' )
	]
}