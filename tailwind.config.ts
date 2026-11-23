/** Màu và chữ lấy từ bộ nhận diện Phượt Mỹ (tokens.json) */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F3446',
        mountain: '#1A4760',
        sky: '#54BCC0',
        meadow: '#4E9D7E',
        cream: '#FBEDBC',
        'cream-soft': '#FDF8E4',
        line: '#D8D1AA',
        jeep: '#66756E',
      },
      fontFamily: {
        display: ['Bitter', 'Georgia', 'serif'],
        sans: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { page: '1200px' },
    },
  },
  plugins: [],
};
