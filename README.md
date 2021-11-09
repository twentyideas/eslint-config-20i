# eslint-config-20i

## Install

1.

```
npx install-peerdeps -D @20i/eslint-config
```

2. Create a new file `.eslintrc.js` in the directory of your project.
3. Add the following code to the file.

```
module.exports = {
  extends: ["@20i/eslint-config"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.eslint.json"],
  },
}
```

> For React projects, use `@20i/eslint-config/react` instead. 4. Add a special `tsconfig.json` file to your project: `tsconfig.eslint.json`

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

## Configure VS Code

1. Install the extension `eslint-vscode`
2. Add the following to your `.vscode/settings.json` file:

```
  // first organize imports, then have eslint/prettier fix them
  "editor.codeActionsOnSave": ["source.organizeImports", "source.fixAll"],\

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
```

3. Restart VS Code

## With Create React App

1. Install like above
2. Replace `"react-app"` with `"@20i/eslint-config/react"` in the eslint config either in package.json or in `.eslintrc.js`

> Inspired heavily by [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos)
