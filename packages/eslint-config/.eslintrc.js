const groupConfig = {
  groups: [
    // Packages. `react` related packages come first.
    ["^react", "^@?\\w"],
    // @uwu-ui
    ["^@uwu-ui"],
    // Side effect imports.
    ["^\\u0000"],
    // Parent imports. Put `..` last.
    ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
    // Other relative imports. Put same-folder imports and `.` last.
    ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"]
  ]
};

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["react", "react-hooks", "prettier", "simple-import-sort", "import"],
  parserOptions: {
    project: "tsconfig.json",
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "simple-import-sort/sort": ["error", groupConfig],
    "sort-imports": "off",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "prettier/prettier": ["error"],
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      env: {
        browser: true,
        es6: true,
        jest: true,
        node: true
      },
      parser: "@typescript-eslint/parser",
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
      ],
      plugins: [
        "react",
        "react-hooks",
        "@typescript-eslint",
        "prettier",
        "simple-import-sort",
        "import"
      ],
      parserOptions: {
        project: "tsconfig.json",
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      },
      settings: {
        react: {
          version: "detect"
        }
      },
      rules: {
        "simple-import-sort/sort": ["error", groupConfig],
        "sort-imports": "off",
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
        "prettier/prettier": ["error"],
        "react/prop-types": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "off"
      }
    },
    {
      files: ["**/*.stories.ts", "**/*.stories.tsx"],
      env: {
        browser: true,
        es6: true,
        jest: true,
        node: true
      },
      parser: "@typescript-eslint/parser",
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
      ],
      plugins: [
        "react",
        "react-hooks",
        "@typescript-eslint",
        "prettier",
        "simple-import-sort",
        "import"
      ],
      parserOptions: {
        project: "tsconfig.json",
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      },
      settings: {
        react: {
          version: "detect"
        }
      },
      rules: {
        "simple-import-sort/sort": ["error", groupConfig],
        "sort-imports": "off",
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
        "prettier/prettier": ["error"],
        "react/prop-types": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off"
      }
    }
  ]
};
