/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
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
