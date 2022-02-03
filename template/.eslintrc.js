module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  ignorePatterns: ['node_modules', 'Dangerfile.ts'],
  extends: ['@pagopa/eslint-config/react'],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
  }
};
