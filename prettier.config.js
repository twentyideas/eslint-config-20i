/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  endOfLine: "auto",
  semi: false,
  trailingComma: "es5",
  plugins: ["prettier-plugin-organize-imports"],
}

export default config
