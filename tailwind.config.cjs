/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1224px'
			// => @media (min-width: 1224px) { ... }
		},
		animation: {
			fade: 'show 4s linear forwards',
			progress: 'progress 1s .25s linear forwards'
		},
		keyframes: {
			show: {
				'5%': {
					opacity: '1',
					visibility: 'visible',
					transform: 'translateY(0px)'
				},
				'90%': {
					opacity: '1',
					transform: 'translateY(0px)'
				},
				'95%': {
					opacity: '1'
				},
				'100%': {
					opacity: '0',
					transform: 'translateY(25px)'
				}
			},
			progress: {
				to: {
					width: 'calc(100% - 10px)'
				}
			}
		},
		extend: {}
	},
	plugins: []
};
