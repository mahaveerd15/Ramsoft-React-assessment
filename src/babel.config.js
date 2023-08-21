module.exports = {
  presets: [
    ["@babel/preset-react", { "runtime": "automatic" }],
    "@babel/preset-env",
  ],
  plugins: [
    ["@babel/plugin-transform-class-properties", { "loose": true }],
    ["@babel/plugin-proposal-private-methods", { "loose": true }],
  ],
};
