module.exports = {
  env: {
    "browser": true,
    "es2021": true
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "prettier"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended"
  ],
  settings: {
    "import/resolver": {
      "typescript": {
        "project": "./tsconfig.json"
      }
    }
  },
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    "jsx-a11y/control-has-associated-label": "off",
    "react/jsx-filename-extension": ["warn", { "extensions": [".tsx"] }],
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "no-unused-vars": "off",
    "camelcase": "off",
    "no-shadow": "off",
    "no-use-before-define": "off",
    "import/prefer-default-export": "off",
    "no-nested-ternary": "off",
    "react/prop-types": [0, { "ignore": ["ignore"], "customValidators": ["customValidators"], "skipUndeclared": true }],
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-empty-interface": "off",
    "import/no-extraneous-dependencies": ["error", { "devDependencies": false }],
    "react/jsx-props-no-spreading": "off",
    "consistent-return": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "@typescript-eslint/no-empty-function": "off",
    "import/extensions": [
      // airbnb config does not allow importing typescript files
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "sort-imports": [
      "error",
      {
        "ignoreCase": true,
        "ignoreDeclarationSort": true // 알파벳 대소/모듈간 정렬은 eslint-plugin-import/order를 사용할 것
      }
    ],
    "import/order": [
      "error",
      {
        // 모듈간 정렬은 eslint-plugin-import를 사용 https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md#groups-array
        "groups": ["builtin", "external", "internal", "parent", "sibling"], // 노드 빌트인 모듈(builtin), 외부모듈(external), 내부모듈(internal), parent path 모듈(parent), siblint path모듈(sibling) 순으로 정렬
        "alphabetize": {
          "order": "asc", // 알파벳순 정렬
          "caseInsensitive": true // 대소문자는 구분 x
        }
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "printWidth": 100,
        "singleQuote": true,
        "semi": true,
        "useTabs": false,
        "tabWidth": 2,
        "trailingComma": "all",
        "parser": "typescript",
        "endOfLine": "auto"
      }
    ]
  }
}
