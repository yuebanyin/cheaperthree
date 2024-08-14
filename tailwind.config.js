/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/esy-ui/es/**/*.mjs'],
  theme: {
    extend: {
      fontSize: {
        '2xl': ['1.75rem', '2.5rem'],
        '5xl': ['3.25rem', '3.75rem'],
        '5xlc': ['4rem', '4.5rem'],
      },
      colors: {
        primary: 'rgb(55 65 81)',
        'primary-text': '#222',
        default: '#fefefe',
        'primary-hover': 'rgba(58,122,250, 0.2)',
        success: '#00c48a',
        warning: '#ff9e00',
        error: '#f44330',
        'primary-ipt': '#c25501',
        'primary-ipt-hover': 'rgba(194,85,1, .2)',
        'disabled-text': '#e0e0e1',
        disabled: '#a5a5a5',
        split: '#e1e1e1',
        desc: '#c9c9c9',
        label: '#BFBFBF',
        mask: 'rgba(0,0,0,0.6)',
        clear: 'rgba(0,0,0,0.3)',
        placeholder: '#555',
        icon: 'gray',
        'table-header': '#f5f5f5',
        primaryDeep: 'var(--pc-primary-deep)',
        btnDeep: '#09090b',
        'text-1': '#4d4d4d',
        blue: '#1287ff',
        gray: 'rgb(230 232 236)',
      },
      width: {
        '3/5': '60%',
        '4/5': '80%',
        1000: '1100px',
        800: '800px',
        18: '4.5rem',
      },
      maxWidth: {
        1280: '1280px',
      },
      height: {
        '100vh': '100vh',
        919: '919px',
        600: '640px',
      },
      animation: {
        'checked-animate': 'checked-animate 0.2s ease-in-out forwards',
        'translate-x-100-0': 'translate-x-100-0 0.3s',
        'translate-x-0-100': 'translate-x-0-100 0.3s',
        'translate-x-m100-0': 'translate-x-m100-0 0.3s',
        skeleton: 'translate-x-m100-0 1s infinite',
        'translate-x-0-m100': 'translate-x-0-m100 0.3s',
        'translate-y-m100-0': 'translate-y-m100-0 0.3s',
        'translate-y-0-m100': 'translate-y-0-m100 0.3s',
        'translate-y-100-0': 'translate-y-100-0 0.3s',
        'translate-y-0-100': 'translate-y-0-100 0.3s',
        'zoom-0-100': 'zoom-0-100 0.3s',
        'zoom-100-0': 'zoom-100-0 0.3s',
        'opacity-100-0': 'opacity-100-0 0.5s ease-in-out infinite alternate',
        'rotate-0-360': 'rotate-0-360 0.8s linear infinite',
        'scale-y-1-2': 'scale-y-1-2 0.5s ease-in-out infinite alternate',
        cube: 'cube 1.2s ease-in-out infinite',
        'move-down-to-up': 'move-down-to-up 0.3s',
        'standard-line': 'standard-line 0.25s ease-in-out forwards',
        'scroll-x': 'scroll-x linear infinite',
      },
      keyframes: {
        'checked-animate': {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(0.5)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        'translate-x-100-0': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
        'translate-x-0-100': {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        'translate-x-m100-0': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
        'translate-x-0-m100': {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
        'translate-y-m100-0': {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
        },
        'translate-y-0-m100': {
          '0%': {
            transform: 'translateY(0%)',
          },
          '100%': {
            transform: 'translateY(-100%)',
          },
        },
        'translate-y-100-0': {
          '0%': {
            transform: 'translateY(100%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
        },
        'translate-y-0-100': {
          '0%': {
            transform: 'translateY(0%)',
          },
          '100%': {
            transform: 'translateY(100%)',
          },
        },
        'zoom-0-100': {
          '0%': {
            transform: 'scale(0%)',
          },
          '100%': {
            transform: 'scale(100%)',
          },
        },
        'zoom-100-0': {
          '0%': {
            transform: 'scale(100%)',
          },
          '100%': {
            transform: 'scale(0%)',
          },
        },
        'opacity-100-0': {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        'rotate-0-360': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        'scale-y-1-2': {
          '0%': {
            transform: 'scaleY(1)',
          },
          '100%': {
            transform: 'scaleY(2)',
          },
        },
        cube: {
          '0%': {
            transform: 'scale(0.9)',
            opacity: '0.9',
          },
          '100%': {
            transform: 'rotate(90deg) translateY(-100%) scale(0.3)',
            opacity: '0',
          },
        },
        'move-down-to-up': {
          '0%': {
            transform: 'translate(0, -100%)',
            opacity: '0.5',
          },
          '100%': {
            transform: 'translate(0, 0)',
            opacity: '1',
          },
        },
        'standard-line': {
          '0%': {
            transform: 'scaleX(1)',
          },
          '10%': {
            transform: 'scaleX(0)',
          },
          '100%': {
            transform: 'scaleX(1)',
          },
        },
        'scroll-x': {
          '0%': {
            transform: 'attr("data-translatex")',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      zIndex: {
        1: '1',
        2: '2',
        100: '100',
        101: '101',
        102: '102',
        1000: '1000',
      },
      boxShadow: {
        card: ' 0 3px 1px -2px rgb(0 0 0 / 24%), 0 2px 2px 0 rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 10%)',
      },
      borderRadius: {
        '2/5': '40%',
        half: '50%',
      },
      transitionProperty: {
        border: 'border',
        filter: 'filter',
        'z-index': 'z-index',
        'border-bg-color': 'border-color,background-color',
        'left-top': 'left,top',
        width: 'width',
      },
      backgroundImage: {
        'white-gray-1': 'linear-gradient(180deg, hsl(0deg 0% 100% / 90%), hsl(0deg 0% 100% / 40%)),linear-gradient(0deg, hsl(0deg 0% 100% / 90%), hsl(0deg 0% 100% / 40%))',
        skeleton: 'linear-gradient(90deg, hsl(0deg 0% 100% / 10%), hsl(0deg 0% 100% / 50%), hsl(0deg 0% 100% / 0%))',
      },
      backgroundPosition: {
        'top-bottom': 'top, bottom',
      },
      spacing: {
        4.5: '1.125rem',
        '1/5': '20%',
        '7/10': '70%',
        '2/5': '40%',
        '3/5': '60%',
        '13/50': '26%',
        '17/20': '85%',
        '2/1': '200%',
      },
      scale: {
        85: '85%',
      },
      transitionDuration: {
        250: '250ms',
      },
      flex: {
        '1-0-auto': '1 0 auto',
        '1/3': '33.333333%',
        '3/5': '60%',
        '2/5': '40%',
      },
    },
  },
};
