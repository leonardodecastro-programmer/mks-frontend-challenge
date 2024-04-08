import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        'color-principal': {
          DEFAULT: '#0F52BA'
        },
        'color-neutral': {
          80: '#373737',
          90: '#2C2C2C',
          100: '#BFBFBF'
        }
      }
    },
    plugins: []
  }
}
export default config
