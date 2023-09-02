module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:astro/recommended'],
  // ...
  overrides: [
    {
      files: ['**/*.cjs'],
      env: {
        node: true,
        es2020: true,
      },
    },
    {
      files: ['**/*.{js,mjs}'],
      env: {
        browser: true,
        es2020: true,
      },
      parserOptions: {
        sourceType: 'module',
      },
    },
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      plugins: ['astro'],
      env: {
        // Enables global variables available in Astro components.
        node: true,
        'astro/astro': true,
        es2020: true,
      },
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
        // The script of Astro components uses ESM.
        sourceType: 'module',
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
        'astro/no-conflict-set-directives': 'error',
        'astro/no-unused-define-vars-in-style': 'error',
      },
    },
    {
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      env: {
        browser: true,
        es2020: true,
      },
      parserOptions: {
        sourceType: 'module',
      },
      rules: {
        // If you are using "prettier/prettier" rule,
        // you don't need to format inside <script> as it will be formatted as a `.astro` file.
        'prettier/prettier': 'off',
      },
    },
  ],
};
