process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: '@antfu/eslint-config-ts',
  rules: {
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    'no-console': 'off',
    'unused-imports/no-unused-vars': 'off',
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
  },
}
