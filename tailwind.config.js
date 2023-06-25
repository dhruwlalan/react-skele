const ott = () => {
  const range = {}
  for (let i = 0; i <= 200; i += 0.5) {
    range[i] = `${i * 0.25}rem`
  }
  return range
}

module.exports = {
  content: ['./src/**/*.stories.{js,jsx,ts,tsx}'],
  theme: { extend: {
    borderRadius: { ...ott() },
      fontSize: { ...ott() },
      lineHeight: ott(),
      spacing: ott(),
      height: ott(),
      minHeight: ott(),
      maxHeight: ott(),
      width: ott(),
      minWidth: ott(),
      maxWidth: { ...ott() },
    }
  },
  plugins: [],
};
