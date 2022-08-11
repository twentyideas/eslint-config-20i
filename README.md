# eslint-config-20i

[![publish](https://github.com/twentyideas/eslint-config-20i/actions/workflows/publish.yml/badge.svg)](https://github.com/twentyideas/eslint-config-20i/actions/workflows/publish.yml)
![npm (scoped)](https://img.shields.io/npm/v/@20i/eslint-config)

## Auto Install

Use mrm to install all dependencies and add config files

```
npx mrm eslint --preset @20i/mrm-preset
```

## Manual Install

1. Install dev dependencies:

```bash
yarn add -D eslint prettier typescript @20i/eslint-config
# or
npm i -D eslint prettier typescript @20i/eslint-config
```

2. Create a new file `.eslintrc.js` in the directory of your project.
3. Add the following code to the file.

```
module.exports = {
  extends: ["@20i/eslint-config"],
  parserOptions: {
    project: ["./tsconfig.eslint.json"],
  },
  ignorePatterns: [],
}
```

> For React projects, use `@20i/eslint-config/react` instead.

4. Add a special `tsconfig.json` file to your project: `tsconfig.eslint.json` to enable full type checking.

```
{
  // extend your base config to share compilerOptions, etc
  "extends": "./tsconfig.json",
  "compilerOptions": {
    // ensure that nobody can accidentally use this config for a build
    "noEmit": true
  },
  "include": [
    "**/*",
    "**/.*"
  ],
}
```

5. Add the following to your `.prettierrc` file:

```
{
  "endOfLine": "auto",
  "semi": false,
  "trailingComma": "es5"
}
```

## Configure VS Code

1. Install the [`ESlint` extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
1. Install the [`Prettier - Code formatter` extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
1. Add the following to your global `~/.vscode/settings.json` file:
    ```jsonc
    {
      "editor.codeActionsOnSave": {
        "source.fixAll": true
      },

      // format on save for everything but what prettier will handle through eslint
      "editor.formatOnSave": true,
      "[javascriptreact]": {
        "editor.formatOnSave": false,
      },
      "[javascript]": {
        "editor.formatOnSave": false,
      },

      "[typescript]": {
        "editor.formatOnSave": false,
      },
      "[typescriptreact]": {
        "editor.formatOnSave": false,
      },
    }
    ```
1. Restart VS Code

> Inspired heavily by [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos)
