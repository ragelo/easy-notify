module.exports ={
  extends: 'react-app',
  env: {
    browser: true,
  },
  rules: {
    'unicorn/filename-case': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        './*.js',
        './config/**',
        './scripts/**',
        './__tests__/**',
        './__mocks__/**',
      ],
    }],
  },
};
