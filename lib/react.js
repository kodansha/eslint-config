module.exports = {
  extends: ["plugin:react/recommended", "prettier/react"],
  rules: {
    "react/display-name": "off",
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
