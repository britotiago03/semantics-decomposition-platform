import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import sveltePlugin from 'eslint-plugin-svelte';
import prettierConfig from 'eslint-config-prettier';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// eslint-plugin-svelte doesn't yet support the flat config directly
// so we need this parser setup
import svelteParser from 'svelte-eslint-parser';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default tseslint.config(
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
      // Global options
      ignores: [
        '.DS_Store',
        'node_modules/**',
        '/build/**',
        '/.svelte-kit/**',
        '/package/**',
        '.env',
        '.env.*',
        '!.env.example',
        'vite.config.js.timestamp-*',
        'vite.config.ts.timestamp-*',
      ],
      languageOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        parserOptions: {
          project: path.resolve(__dirname, './tsconfig.json'),
          extraFileExtensions: ['.svelte'],
        },
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
    },
    // Svelte files config
    {
      files: ['**/*.svelte'],
      plugins: {
        svelte: sveltePlugin,
      },
      languageOptions: {
        parser: svelteParser,
        parserOptions: {
          parser: tseslint.parser,
        },
      },
      rules: {
        ...sveltePlugin.configs.recommended.rules,
      },
    },
    prettierConfig
);