import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
  			primary: {
  				'1': '#0055B3',
  				'2': '',
  				'3': '',
  				'4': '',
  				'5': '',
  				'6': '',
  				'7': '',
  				'8': ''
  			},
  			secondry: {
  				'0': '#FFD700',
  				'1': '#FFFFFF',
  				'2': '#FFFBE5',
  				'3': '#FFEF99',
  				'4': '#FFE766',
  				'5': '#FFDF33',
  				'6': '#FFD700',
  				'7': '#665600',
  				'8': '#332B00',
  				'9': '#1A1600'
  			},
  			tertiary: {
  				'0': '#0D0D0D',
  				'1': '#A1A1A1',
  				'2': '#929292',
  				'3': '#757575',
  				'4': '#666666',
  				'5': '#484848',
  				'6': '#2B2B2B',
  				'7': '#0D0D0D',
  				'8': '#0A0A0A'
  			},
  			neutral: {
  				'0': '#0D0D0D',
  				'1': '#FFFFFF',
  				'2': '#E1E1E1',
  				'3': '#C4C4C4',
  				'4': '#A6A6A6',
  				'5': '#979797',
  				'6': '#898989',
  				'7': '#7A7A7A',
  				'8': '#6B6B6B'
  			},
  			positive: {
  				'1': '#170604',
  				'2': '#2F0B08',
  				'3': '#5E1610',
  				'4': '#BB2D21',
  				'5': '#EA3829',
  				'6': '#EE6054',
  				'7': '#F2887F',
  				'8': '#FDEBEA'
  			},
  			success: {
  				'1': '',
  				'2': '',
  				'3': '',
  				'4': '',
  				'5': '#008F5D',
  				'6': '',
  				'7': '',
  				'8': ''
  			},
  			blue: {
  				'1': '#C6DEF780',
  				'2': '',
  				'3': '',
  				'4': '',
  				'5': '',
  				'6': '#0055B3',
  				'7': '',
  				'8': ''
  			},
  		},
		backgroundColor:{
			success: {
				'1': '',
				'2': '',
				'3': '',
				'4': '',
				'5': '#008F5D33',
				'6': '',
				'7': '',
				'8': ''
			},
		},
  		fontFamily: {
  			poppins: ['Poppins', 'sans-serif'],
  			swiss: ['Swiss721BoldExtendedBT', 'sans-serif']
  		},
  		keyframes: {
  			'dot-pulse': {
  				'0%, 100%': {
  					backgroundColor: '#A0A0A0'
  				},
  				'33%': {
  					backgroundColor: '#01CFFF'
  				},
  				'66%': {
  					backgroundColor: '#A0A0A0'
  				}
  			},
  			slideUp: {
  				'0%': {
  					transform: 'translateY(100%)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			fadeOut: {
  				'0%': {
  					opacity: '1'
  				},
  				'100%': {
  					opacity: '0'
  				}
  			},
  			popOut: {
  				'0%': {
  					transform: 'scale(0)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'scale(1)',
  					opacity: '1'
  				}
  			}
  		},
  		animation: {
  			'dot-pulse-1': 'dot-pulse 1.5s infinite 0.3s',
  			'dot-pulse-2': 'dot-pulse 1.5s infinite 0.6s',
  			'dot-pulse-3': 'dot-pulse 1.5s infinite 0.9s',
  			slideUp: 'slideUp 0.5s ease-out',
  			fadeIn: 'fadeIn 0.5s ease-out',
  			fadeOut: 'fadeOut 0.5s ease-in',
  			popOut: 'popOut 0.5s ease-out'
  		}
    },
  },
  plugins: [],
} satisfies Config;
