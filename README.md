# @kodansha/eslint-config

> [!IMPORTANT]  
> This package is deprecated and no longer maintained.

A set of KODANSHA ESLint configuration for TypeScript projects.

It is recommended to use this along with [@kodansha/prettier-config](https://github.com/kodansha/prettier-config).

## Installation

```
npm install -D typescript eslint @kodansha/eslint-config
```

or

```
yarn add -D typescript eslint @kodansha/eslint-config
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
  extends: ["@kodansha/eslint-config/presets/next"],
  root: true,
};
```

### React.js

To use the preset for React.js, put `.eslintrc.js` in your project's root directory:

```js
module.exports = {
  extends: ["@kodansha/eslint-config/presets/react"],
  root: true,
};
```

### Node.js

To use the preset for Node.js, put `.eslintrc.js` in your project's root directory:

```js
module.exports = {
  extends: ["@kodansha/eslint-config/presets/node"],
  root: true,
};
```

### Nest.js

To use the preset for Nest.js, put `.eslintrc.js` in your project's root directory:

```js
module.exports = {
  extends: ["@kodansha/eslint-config/presets/nest"],
  root: true,
};
```
