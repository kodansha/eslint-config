module.exports = {
  extends: ["plugin:node/recommended"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  settings: {
    node: {
      // https://github.com/mysticatea/eslint-plugin-node/issues/205
      tryExtensions: [".js", ".json", ".node", ".ts", ".jsx", ".tsx"],
    },
  },
  env: {
    node: true,
  },
};
