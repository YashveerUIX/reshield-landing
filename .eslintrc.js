// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // Packages `react` related packages come first.
              ["^react", "^@?\\w"],
              // Internal packages.
              ["^(@|containers)(/.*|$)", "^(@|components)(/.*|$)"],
              ["^(@|core)(/.*|$)", "^(@|global)(/.*|$)"],
              ["^(@|hoc)(/.*|$)", "^(@|hooks)(/.*|$)"],
              ["^(@|types)(/.*|$)"],
              ["^(@|store)(/.*|$)"],
            ],
          },
        ],
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "simple-import-sort"],
  rules: {
    "react/prop-types": 0,
    "simple-import-sort/imports": 2,
    "simple-import-sort/exports": 2,
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/ban-types": 0,
    semi: ["error", "always"],
    "@typescript-eslint/no-unused-vars": 0,
  },
};
