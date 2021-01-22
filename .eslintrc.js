module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ignorePatterns: ["**/__generated__/*.ts"],
  rules: {
    'prettier/prettier': 0,
  },
};
