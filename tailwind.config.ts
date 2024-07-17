import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary-bg-color': '#c27e7e',
      'secondary-bg-color': '#f7f6f4',
      'white-bg-color': '#ffffff',

      'primary-text-color': '#ffffff',
      'secondary-text-color': '#c27e7e',
      'white-text-color': '#f7f6f4',
      'black-text-color': '#3E4140',
    },
  },
  plugins: [],
}
export default config
