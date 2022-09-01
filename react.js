/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "./.eslintrc.js",
  ],
  rules: {
    "react/no-unescaped-entities": "off",
    // copied from eslint-config-react-app in order to remove dependency
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    "react/forbid-foreign-prop-types": ["warn", { allowInPropTypes: true }],
    "react/jsx-no-comment-textnodes": "warn",
    "react/jsx-no-duplicate-props": "warn",
    "react/jsx-no-target-blank": "warn",
    "react/jsx-no-undef": "error",
    "react/jsx-pascal-case": [
      "warn",
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    "react/no-danger-with-children": "warn",
    // Disabled because of undesirable warnings
    // See https://github.com/facebook/create-react-app/issues/5204 for
    // blockers until its re-enabled
    // 'react/no-deprecated': 'warn',
    "react/no-direct-mutation-state": "warn",
    "react/no-is-mounted": "warn",
    "react/no-typos": "error",
    "react/require-render-return": "error",
    "react/style-prop-object": "warn",
  },
}
