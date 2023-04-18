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
  },
}
