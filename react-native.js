/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  plugins: ["react-native"],
  extends: [
    "plugin:react/recommended",
    "plugin:react-native/all",
    "./.eslintrc.js",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    "react-native/react-native": true,
  },
  rules: {
    "react/no-unescaped-entities": "off",
    "react-native/no-inline-styles": "off",
  },
}
