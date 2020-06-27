module.exports = {
  extends: ["plugin:react/recommended", "prettier/react"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/display-name": "off",
    "react/prop-types": "off",
  },
};
