import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import eslintPluginPrettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react: react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier: eslintPluginPrettier,
      import: importPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      "jsx-a11y/control-has-associated-label": "off",
      "react/jsx-filename-extension": [
        "warn",
        {
          extensions: [".tsx"],
        },
      ],

      "react/react-in-jsx-scope": "off",
      "react/require-default-props": "off",
      "no-unused-vars": "off",
      camelcase: "off",
      "no-shadow": "off",
      "no-use-before-define": "off",
      "import/prefer-default-export": "off",
      "no-nested-ternary": "off",

      "react/prop-types": [
        0,
        {
          ignore: ["ignore"],
          customValidators: ["customValidators"],
          skipUndeclared: true,
        },
      ],

      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/no-shadow": ["error"],
      "@typescript-eslint/no-empty-interface": "off",

      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: ["eslint.config.js"],
        },
      ],

      "react/jsx-props-no-spreading": "off",
      "consistent-return": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-noninteractive-element-interactions": "off",
      "@typescript-eslint/no-empty-function": "off",

      "sort-imports": [
        "error",
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],

      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling"],

          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "prettier/prettier": [
        "error",
        {
          printWidth: 100,
          singleQuote: true,
          semi: true,
          useTabs: false,
          tabWidth: 2,
          trailingComma: "all",
          parser: "typescript",
          endOfLine: "auto",
        },
      ],
    },
  },
);
