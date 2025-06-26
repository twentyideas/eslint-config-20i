import { fixupPluginRules } from "@eslint/compat"
import reactConfig from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import reactNative from "eslint-plugin-react-native"
import globals from "globals"
import tsEslint from "typescript-eslint"

/** Untested */
export default tsEslint.config(
  reactConfig.configs.flat.recommended,
  reactConfig.configs.flat["jsx-runtime"],
  reactHooks.configs["recommended-latest"],
  {
    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      "react-native": fixupPluginRules(reactNative),
    },
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
