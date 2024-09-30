import { FlatCompat } from "@eslint/eslintrc"
import reactConfig from "eslint-plugin-react"
import reactNative from "eslint-plugin-react-native"
import globals from "globals"
import tsEslint from "typescript-eslint"

const compat = new FlatCompat()

/** Untested */
export default tsEslint.config(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  reactConfig.configs.flat.recommended,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  reactConfig.configs.flat["jsx-runtime"],
  ...compat.config({
    extends: ["plugin:react-hooks/recommended", "plugin:react-native/all"],
  }),
  {
    languageOptions: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      globals: {
        ...globals.browser,
        ...globals.node,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        ...reactNative.environments["react-native"].globals,
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "react/no-unescaped-entities": "off",
      "react-native/no-inline-styles": "off",
    },
  }
)
