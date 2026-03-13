import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import { defineConfig } from 'eslint/config'

export default defineConfig(
  // reemplaza .eslintignore
  {
    ignores: ['dist', 'node_modules'],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,

  // reglas generales
  {
    files: ['**/*.{js,ts}'],

    languageOptions: {
      globals: globals.browser,
    },

    rules: {
      // buenas prácticas
      'no-console': 'warn',
      'no-debugger': 'warn',

      // estilo
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],

      // imports
      'no-duplicate-imports': 'error',
    },
  },

  // reglas específicas de typescript
  {
    files: ['**/*.ts', '**/*.tsx'],

    rules: {
      'no-unused-vars': 'off',

      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      '@typescript-eslint/no-explicit-any': 'warn',

      '@typescript-eslint/consistent-type-imports': 'error',
    },
  }
)
