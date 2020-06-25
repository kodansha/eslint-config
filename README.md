# @kodansha/eslint-config

A set of KODANSHA ESLint configuration for TypeScript projects.
All configuration presets work along with prettier.

## Installation

```
npm install -D typescript eslint prettier @kodansha/eslint-config
```

or

```
yarn add -D typescript eslint prettier @kodansha/eslint-config
```

## Usage

### Defaults

To use the defaults preset, put `.eslintrc.js` in your project's root directory:

```js
module.exports = {
  extends: ["@kodansha"],
  root: true,
};
```

### Next.js

To use the preset for Next.js, put `.eslintrc.js` in your project's root directory:

```js
module.exports = {
  extends: ["@kodansha/eslint-config/next"],
  root: true,
};
```
