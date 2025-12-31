# Codebase Overview: @20i/eslint-config

## Project Description

This is a shareable ESLint and Prettier configuration package for Twenty Ideas projects. It provides comprehensive linting and formatting configurations for TypeScript, JavaScript, React, and React Native projects using ESLint 9's flat config format.

**Package Name:** `@20i/eslint-config`
**Version:** 4.0.12
**Author:** Greg McKelvey <mckelveygreg@gmail.com>
**License:** MIT
**Repository:** https://github.com/twentyideas/eslint-config-20i

## Key Features

- ESLint 9+ flat config format support
- Strict TypeScript type checking with typescript-eslint
- React and React Native configurations with accessibility checks
- Prettier integration with automatic import organization
- Exportable Prettier configuration
- Pre-configured for VS Code integration
- Git hooks with Husky and lint-staged

## Codebase Structure

```
/root/repo/
├── .github/              # GitHub Actions workflows (publish workflow)
├── .husky/               # Git hooks for pre-commit linting
├── .vscode/              # VS Code workspace configuration
│   └── extensions.json   # Recommended VS Code extensions
├── .yarn/                # Yarn 4 dependencies and cache
├── eslint.config.js      # Base ESLint configuration (flat config)
├── index.js              # Main entry point (exports base config)
├── index.d.ts            # TypeScript definitions for base config
├── react.js              # React-specific ESLint configuration
├── react.d.ts            # TypeScript definitions for React config
├── react-native.js       # React Native ESLint configuration (untested)
├── react-native.d.ts     # TypeScript definitions for React Native config
├── prettier.config.js    # Shared Prettier configuration
├── prettier.config.d.ts  # TypeScript definitions for Prettier config
├── tsconfig.json         # TypeScript compiler configuration
├── package.json          # Package metadata and dependencies
└── README.md             # Documentation and usage instructions
```

## Core Configuration Files

### Base ESLint Configuration (eslint.config.js)

The base configuration includes:
- ESLint recommended rules
- Strict and stylistic TypeScript type checking
- Prettier integration
- Custom TypeScript rules for:
  - Consistent type imports/exports
  - Shadow variable detection
  - Unused variables with underscore prefix support
  - Template expression restrictions
  - Void expression handling

**Key Configuration:**
- Language: Node.js globals
- Type checking: Enabled with project-relative config
- Ignores: `.yarn/**/*` directory

### React Configuration (react.js)

Extends base config with:
- React recommended and JSX runtime configs
- React Hooks rules (recommended-latest)
- JSX A11y accessibility checks
- Service Worker globals
- React version auto-detection

**Custom Rules:**
- Disabled unescaped entities warnings
- Foreign prop types warnings
- JSX comment and duplicate prop warnings
- Pascal case enforcement for components
- Dangerous children and state mutation warnings

### React Native Configuration (react-native.js)

**Status:** Untested

Extends React config with:
- React Native plugin (using @eslint/compat fixup)
- Browser and Node.js globals
- React Native environment globals

**Custom Rules:**
- Disabled inline styles warnings
- Disabled unescaped entities warnings

### Prettier Configuration (prettier.config.js)

Settings:
- `endOfLine: "auto"` - Automatic line ending detection
- `semi: false` - No semicolons
- `trailingComma: "es5"` - ES5-compatible trailing commas
- Plugin: `prettier-plugin-organize-imports` - Auto-organize imports

## Dependencies

### Peer Dependencies (Required)
- `eslint`: >= 9 || < 10
- `prettier`: >= 3 || < 4
- `typescript`: >= 5 || < 6

### Runtime Dependencies
- `@eslint/compat`: ^1.3.1 - Compatibility layer for legacy plugins
- `eslint-config-prettier`: ^10.1.8 - Disables conflicting ESLint rules
- `eslint-plugin-jsx-a11y`: ^6.10.2 - Accessibility rules for JSX
- `eslint-plugin-prettier`: ^5.5.3 - Runs Prettier as ESLint rule
- `eslint-plugin-react`: ^7.37.5 - React-specific linting rules
- `eslint-plugin-react-hooks`: 5.2.0 - Rules for React Hooks
- `globals`: ^16.3.0 - Global variables for different environments
- `prettier-plugin-organize-imports`: ^4.0.0 - Auto-organize imports
- `typescript-eslint`: ^8.37.0 - TypeScript ESLint parser and rules

### Development Dependencies
- `@eslint/js`: ^9.31.0 - ESLint core JavaScript rules
- `@types/*`: Type definitions for TypeScript
- `eslint`: ^9.31.0 - Core linting engine
- `eslint-plugin-react-native`: ^5.0.0 - React Native linting rules
- `husky`: ^9.1.7 - Git hooks
- `is-ci`: ^4.1.0 - Detect CI environment
- `lint-staged`: ^16.1.2 - Run linters on staged files
- `markdownlint`: ^0.38.0 - Markdown linting
- `markdownlint-cli`: ^0.45.0 - Markdown linting CLI
- `pinst`: ^3.0.0 - Postinstall script management
- `prettier`: ^3.6.2 - Code formatter
- `typescript`: ^5.8.3 - TypeScript compiler

## Package Exports

The package provides multiple entry points:

```javascript
{
  ".": "./index.js",                          // Base config
  "./react": "./react.js",                    // React config
  "./react-native": "./react-native.js",      // React Native config
  "./prettier.config": "./prettier.config.js"  // Prettier config
}
```

## TypeScript Configuration

**Target:** ESNext
**Module System:** NodeNext (ESM)
**Features:**
- Strict type checking enabled
- JavaScript files allowed
- Declaration files only (`.d.ts`)
- Output directory: `./types`
- Force consistent casing in imports
- ESM/CommonJS interoperability

## Build and Development Scripts

```json
{
  "lint": "yarn eslint --max-warnings=0 --cache --fix \"**/*.{js,ts,jsx,tsx}\"",
  "lint:markdown": "markdownlint --config linters/.markdownlint.json README.md */README.md",
  "postinstall": "is-ci || husky init",
  "prepack": "pinst --disable",
  "postpack": "pinst --enable"
}
```

## Git Hooks

**Pre-commit:** Runs ESLint with auto-fix on staged `.js` files via lint-staged

## Publishing

- Published to npm registry as public package
- Automated via GitHub Actions publish workflow
- Files published: `index.js`, `eslint.config.js`, `react.js`, `react-native.js`, `tsconfig.json`, `prettier.config.js`, `*.d.ts`

## Package Manager

Uses Yarn 4.9.2 with Plug'n'Play (PnP) architecture

## VS Code Integration

Recommended extensions:
- ESLint (dbaeumer.vscode-eslint)
- Prettier - Code formatter (esbenp.prettier-vscode)

Configuration enables format-on-save with ESLint auto-fix for JavaScript/TypeScript files.

## Legacy Support

Version 4.x uses ESLint 9's flat config format. For projects using ESLint < 9, refer to the legacy documentation in the README.

## Usage Example

```javascript
import baseConfig from "@20i/eslint-config"
import reactConfig from "@20i/eslint-config/react"
import tsEslint from "typescript-eslint"

export default tsEslint.config(
  {
    ignores: ["**/generated/**/*"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    extends: [...baseConfig, ...reactConfig],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      "react/prop-types": "off",
    },
  }
)
```

## Inspiration

This configuration is heavily inspired by [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos).
