// 1 rem = 37.5 px
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px2rem-exclude": { remUnit: 37.5, exclude: /node_modules/i },
  },
};