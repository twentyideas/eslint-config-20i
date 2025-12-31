import { describe, expect, it } from "vitest"
import reactNativeConfig from "./react-native.js"

describe("react-native ESLint configuration", () => {
  it("should export a valid configuration array", () => {
    expect(reactNativeConfig).toBeDefined()
    expect(Array.isArray(reactNativeConfig)).toBe(true)
    expect(reactNativeConfig.length).toBeGreaterThan(0)
  })

  it("should include react flat config recommended", () => {
    // The first config should include the React recommended rules
    const firstConfig = reactNativeConfig[0]
    expect(firstConfig).toBeDefined()
    expect(firstConfig.plugins).toBeDefined()
    expect(firstConfig.plugins.react).toBeDefined()
  })

  it("should include react jsx-runtime config", () => {
    // The second config should be the jsx-runtime config
    const secondConfig = reactNativeConfig[1]
    expect(secondConfig).toBeDefined()
    expect(secondConfig.rules).toBeDefined()
  })

  it("should include react-hooks configuration", () => {
    // React hooks should be configured
    const hooksConfig = reactNativeConfig.find(
      (config) => config.plugins?.["react-hooks"]
    )
    expect(hooksConfig).toBeDefined()
  })

  it("should have react-native plugin registered", () => {
    // Find the config that has react-native plugin
    const rnConfig = reactNativeConfig.find(
      (config) => config.plugins?.["react-native"]
    )
    expect(rnConfig).toBeDefined()
    expect(rnConfig.plugins["react-native"]).toBeDefined()
  })

  it("should configure language options with correct globals", () => {
    // Find config with languageOptions
    const configWithGlobals = reactNativeConfig.find(
      (config) => config.languageOptions?.globals
    )
    expect(configWithGlobals).toBeDefined()
    expect(configWithGlobals.languageOptions.globals).toBeDefined()

    // Should include browser globals
    expect(configWithGlobals.languageOptions.globals).toHaveProperty(
      "document"
    )
    expect(configWithGlobals.languageOptions.globals).toHaveProperty("window")

    // Should include Node globals
    expect(configWithGlobals.languageOptions.globals).toHaveProperty("process")
    expect(configWithGlobals.languageOptions.globals).toHaveProperty("Buffer")

    // Should include React Native specific globals
    expect(configWithGlobals.languageOptions.globals).toHaveProperty(
      "__DEV__"
    )
  })

  it("should configure React settings with version detect", () => {
    // Find config with settings
    const configWithSettings = reactNativeConfig.find(
      (config) => config.settings?.react
    )
    expect(configWithSettings).toBeDefined()
    expect(configWithSettings.settings.react).toEqual({
      version: "detect",
    })
  })

  it("should disable react/no-unescaped-entities rule", () => {
    // Find the last config with this rule (overrides take precedence)
    const configsWithRule = reactNativeConfig.filter(
      (config) => config.rules?.["react/no-unescaped-entities"] !== undefined
    )
    expect(configsWithRule.length).toBeGreaterThan(0)
    const lastConfig = configsWithRule[configsWithRule.length - 1]
    expect(lastConfig.rules["react/no-unescaped-entities"]).toBe("off")
  })

  it("should disable react-native/no-inline-styles rule", () => {
    // Find config with rules
    const configWithRules = reactNativeConfig.find(
      (config) => config.rules?.["react-native/no-inline-styles"]
    )
    expect(configWithRules).toBeDefined()
    expect(configWithRules.rules["react-native/no-inline-styles"]).toBe("off")
  })

  it("should be a flat config structure", () => {
    // Each config item should be an object
    reactNativeConfig.forEach((config) => {
      expect(typeof config).toBe("object")
      expect(config).not.toBeNull()
    })
  })

  it("should not have any undefined or null configurations", () => {
    reactNativeConfig.forEach((config) => {
      expect(config).toBeDefined()
      expect(config).not.toBeNull()
    })
  })

  it("should merge multiple configuration sources", () => {
    // Should have at least:
    // 1. react recommended
    // 2. react jsx-runtime
    // 3. react-hooks recommended-latest
    // 4. custom config with react-native plugin
    expect(reactNativeConfig.length).toBeGreaterThanOrEqual(4)
  })

  it("should properly configure react-native plugin using fixupPluginRules", () => {
    const rnConfig = reactNativeConfig.find(
      (config) => config.plugins?.["react-native"]
    )
    expect(rnConfig).toBeDefined()
    // The plugin should be an object (wrapped by fixupPluginRules)
    expect(typeof rnConfig.plugins["react-native"]).toBe("object")
  })

  it("should contain all expected rule configurations", () => {
    // Combine all rules from all configs
    const allRules = reactNativeConfig.reduce((acc, config) => {
      if (config.rules) {
        return { ...acc, ...config.rules }
      }
      return acc
    }, {})

    // Check that key rules are present
    expect(allRules).toHaveProperty("react/no-unescaped-entities")
    expect(allRules).toHaveProperty("react-native/no-inline-styles")
  })
})
