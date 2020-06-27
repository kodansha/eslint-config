module.exports = {
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    'node/no-extraneous-import': [
      'error',
      {
        allowModules: ['express'],
      },
    ],
    'node/no-unpublished-import': [
      'error',
      {
        allowModules: ['@nestjs/testing', 'node-mocks-http'],
      },
    ],
  },
};
