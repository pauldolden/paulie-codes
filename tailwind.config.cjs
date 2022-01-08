module.exports = {
  content: ['./src/**/*.html', './src/**/*.svelte'],
  theme: {
    extend: {
      fontFamily: {
        rubik: 'Rubik',
        cokobi: 'cokobi',
        fira: 'Fira Code'
      },
      backgroundImage: {
        clouds: "url('/svg/clouds.svg')",
        night: 'url(/svg/night.svg)',
        bubble: 'url(/svg/bubble.svg)'
      },
      colors: {
        primary: {
          400: '#7aceff'
        },
        secondary: {
          400: '#FF5151'
        },
        tertiary: {
          400: '#161E54'
        },
        editor: {
          bg: '#151130',
          sidebar: '#120b27',
          textIcons: '#393969',
          active: '#A181FA',
          scrollBar: '#40346E',
          tabBar: '#120b27',
          tabBarAlt: '#151130',
          tab: '#150F2E',
          header: '#0C0E14',
          syntax: {
            blue: '#00abfb',
            cyan: '#00e7d5',
            yellow: '#ffd538',
            yellowDark: '#ffb458',
            orange: '#ff6c3c',
            red: '#ff3e8b',
            pink: '#da6fd2',
            green: '#3EDE7F'
          }
        }
      }
    }
  },
  plugins: []
};
