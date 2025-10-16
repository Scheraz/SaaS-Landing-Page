import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true, // ✅ must be here, not under `extend`
      padding: '1rem',
    },
    extend: {
      // ✅ keep other theme customizations here
    },
  },
  plugins: [],
}

export default config
