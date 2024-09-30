// @ts-check

import eslint from "@eslint/js"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import globals from "globals"
import tsEslint from "typescript-eslint"

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
