module.exports = {
  extends: ["plugin:node/recommended"],
  parserOptions: {
    sourceType: "module",
  },
  settings: {
    node: {
      tryExtensions: [".js", ".json", ".node", ".ts", ".jsx", ".tsx"],
    },
  },
  env: {
    node: true,
  },
  rules: {
    "node/no-unsupported-features/es-syntax": "off",
  },
};
