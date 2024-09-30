// @ts-check

import globals from "globals"
import eslint from "@eslint/js"
import tsEslint from "typescript-eslint"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"

export default tsEslint.config(
  eslint.configs.recommended,
  ...tsEslint.configs.strictTypeChecked,
  ...tsEslint.configs.stylisticTypeChecked,
  eslintPluginPrettierRecommended,
  {
    ignores: ["./.yarn/**/*"],
  },
  {
    rules: {
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": "error",

      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],

      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/use-unknown-in-catch-callback-variable": "off",
      "@typescript-eslint/restrict-template-expressions": [
        "error",
        {
          allowAny: true,
          allowBoolean: true,
          allowNullish: false,
          allowNumber: true,
          allowRegExp: true,
        },
      ],
      "@typescript-eslint/no-confusing-void-expression": [
        "error",
        {
          ignoreArrowShorthand: true,
          ignoreVoidOperator: true,
        },
      ],
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
          enforceForJSX: true,
        },
      ],
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        project: true,
      },
    },
  }
)
