import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

// https://www.cnblogs.com/jsonq/p/18357943
export default [
  { ignores: ['**/dist/**', '**/node_modules/**', '.history', 'public/'] },
  js.configs.recommended, // eslint-config-prettier
  ...tseslint.configs.recommended, // eslint-config-prettier
  eslintPluginPrettierRecommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    }
  },
  {
    rules: {
      // ...reactHooks.configs.recommended.rules,

      'prettier/prettier': 'warn',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',

      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  }
]
