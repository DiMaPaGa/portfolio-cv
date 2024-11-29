/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
			montserrat: ['Montserrat', 'sans-serif'],
		  },
		  colors: {
			greenLight: {
			  DEFAULT: '#D3EBE5', // Para detalles secundarios
			},
			rose: {
			  DEFAULT: '#EBD9D3', // Color de fondo principal
			},
			brown: {
			  DEFAULT: '#6B3B2B', // Para textos principales
			},
			green: {
			  DEFAULT: '#559687', // Para detalles o enlaces destacados
			},
			brownLight: {
			  DEFAULT: '#AB7E6F', // Para acentos secundarios
			},
		  },
		  backgroundImage: {
			'home-background': "url('/images/fondoHome.png'), linear-gradient(to bottom, rgba(235, 217, 211, 0.8), rgba(235, 217, 211, 0.4))",
			'education-background': "url('/images/Pizarra.png'), linear-gradient(to bottom, rgba(235, 217, 211, 0.8), rgba(235, 217, 211, 0.4))",
		  },

		  transitionTimingFunction: {
			'ease-custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
		  },
		  transitionDuration: {
			'custom': '300ms',
		  },
		  transform: {
			'pop-down': 'translateY(0)',
			'pop-up': 'translateY(-5px)',
		  },
		  
		},
	  },
	  plugins: [
		function ({ addUtilities }) {
		  addUtilities({
			'.pop-down-child': {
			  transform: 'translateY(0)',
			  transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
			},
			'.pop-down-child:hover': {
			  transform: 'translateY(-5px)',
			},
			'.option-hover-green': {
          		'&:hover': {
            		'background-color': '#559687',
            		'color': '#EBD9D3',
		  		},
		  	},
			
		  });
		},
	  ],
	};