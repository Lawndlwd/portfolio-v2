import plugin from 'tailwindcss/plugin'

export const shadcnPlugin = plugin(
  ({ addBase }) => {
    addBase({
      ':root': {
        '--background': '260 60% 0.98%',
        '--foreground': '104 11% 96%',

        '--js': '52 84% 63%',
        '--primary': '72 86% 61%',
        '--primary-400': '72 76% 55%',
        '--primary-300': '72 55% 65%',
        '--primary-200': '72 33% 89%',
        '--primary-foreground': '241 61% 6%',

        '--ts': '204 100% 40%',
        '--react': '192 95% 68%',
        '--secondary': '180 100% 29%',
        '--secondary-400': '180 76% 55%',
        '--secondary-300': '180 55% 65%',
        '--secondary-200': '180 33% 89%',
        '--secondary-foreground': '104 11% 96%',

        '--muted': '213 27% 84%',
        '--muted-300': '214 32% 91%',
        '--muted-200': '210 40% 96%',
        '--muted-foreground': '104 11% 96%',

        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '210 40% 98%',

        '--card': '222.2 84% 4.9%',
        '--card-foreground': '210 40% 98%',
        '--popover': '222.2 84% 4.9%',
        '--popover-foreground': '210 40% 98%',
        '--border': '217.2 32.6% 17.5%',
        '--input': '217.2 32.6% 17.5%',
        '--ring': 'hsl(212.7,26.8%,83.9)',
      },
      '.dark': {
        'font-size': '80.5%',
        '--background': '104 11% 96%',
        '--foreground': '241 61% 6%',

        '--js': '52 84% 63%',
        '--primary': '72 86% 61%',
        '--primary-400': '72 76% 55%',
        '--primary-300': '72 55% 65%',
        '--primary-200': '72 33% 89%',
        '--primary-foreground': '241 61% 6%',

        '--ts': '204 100% 40%',
        '--react': '192 95% 68%',
        '--secondary': '180 100% 29%',
        '--secondary-400': '180 76% 55%',
        '--secondary-300': '180 55% 65%',
        '--secondary-200': '180 33% 89%',
        '--secondary-foreground': '104 11% 96%',

        '--muted': '213 27% 84%',
        '--muted-300': '214 32% 91%',
        '--muted-200': '210 40% 96%',
        '--muted-foreground': '241 61% 6%',

        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '210 40% 98%',

        '--border': '214.3 31.8% 91.4%',
        '--input': '214.3 31.8% 91.4%',
        '--ring': '222.2 84% 4.9%',
        '--radius': '0.5rem',

        '--card': '0 0% 100%',
        '--card-foreground': '222.2 84% 4.9%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '222.2 84% 4.9%',
      },
    })

    addBase({
      '*': {
        '@apply border-border': {},
      },
      body: {
        '@apply bg-background text-foreground': {},
      },
    })
  },
  {
    theme: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      extend: {
        fontFamily: {
          montserrat: ['var(--font-montserrat)'],
        },
        colors: {
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          primary: {
            js: 'hsl(var(--js))',
            DEFAULT: 'hsl(var(--primary))',
            '400': 'hsl(var(--primary-400))',
            '300': 'hsl(var(--primary-300))',
            '200': 'hsl(var(--primary-200))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          secondary: {
            ts: 'hsl(var(--ts))',
            react: 'hsl(var(--react))',
            DEFAULT: 'hsl(var(--secondary))',
            '400': 'hsl(var(--secondary-400))',
            '300': 'hsl(var(--secondary-300))',
            '200': 'hsl(var(--secondary-200))',
            foreground: 'hsl(var(--secondary-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            '300': 'hsl(var(--muted-300))',
            '200': 'hsl(var(--muted-200))',
            foreground: 'hsl(var(--muted-foreground))',
          },

          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
          },
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
      },
    },
  }
)
