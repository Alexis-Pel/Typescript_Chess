process.env.ESLINT_TSCONFIG = "tsconfig.json";

module.exports = {
  extends: "@antfu/eslint-config-ts",
  rules: {
    "@typescript-eslint/quotes": [
      "error",
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "no-console": "off",
    "unused-imports/no-unused-vars": "off",
    "@typescript-eslint/await-thenable": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/space-before-blocks": "off",
  },
};
