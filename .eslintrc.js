module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: ['airbnb', 'plugin:jest/recommended', 'jest-enzyme'],
  plugins: ['babel', 'import', 'jsx-a11y', 'react', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'linebreak-style': 0,
    'comma-dangle': ['error', 'never'],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: 'always',
        ObjectPattern: { multiline: true },
        ImportDeclaration: 'never',
        ExportDeclaration: { multiline: true, minProperties: 1 }
      }
    ],
    'no-underscore-dangle': 'off',
    'no-restricted-globals': 'off',
    'no-return-assign': 'error',
    'react/jsx-closing-tag-location': 'off',
    'no-param-reassign': 'error',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'error',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'class-methods-use-this': 'off',
    'no-useless-constructor': 'error',
    'no-empty-function': 'error',
    '@typescript-eslint/triple-slash-reference': 'off',
    quotes: ['error', 'single'],
    'react/prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': 'off',
    camelcase: 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-one-expression-per-line': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/require-default-props': 'off',
    'react/static-property-placement': 'off',
    'max-classes-per-file': 'off',
    'func-names': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/no-unescaped-entities': 'off',
    'react/button-has-type': 'off',
    'dot-notation': 'off',
    'react/default-props-match-prop-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'consistent-return': 'off',
    'new-cap': 'off',
    'import/extensions': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'import/prefer-default-export': 'off',
    'react/jsx-curly-newline': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    'react/sort-comp': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'jsx-a11y/no-noninteractive-element-interactions': 'error',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'react/destructuring-assignment': [
      'error',
      'always',
      {
        ignoreClassFields: true
      }
    ]
  }
};
