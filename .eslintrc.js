const prettierOptions = require('./.prettierrc.js');

module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true
  },
  globals: {
    document: true,
    window: true
  },
  extends: [
    'airbnb',
    'standard',
    'standard-react',
    'prettier',
    'prettier/standard',
    'prettier/react'
  ],
  parser: 'babel-eslint',
  plugins: ['react', 'jsx-a11y', 'import', 'no-only-tests', 'prettier', 'react-hooks'],
  rules: {
    'consistent-return': [0],
    'comma-dangle': [0],
    'import/prefer-default-export': [0],
    'no-console': [2],
    'no-underscore-dangle': [0],
    'no-useless-escape': [0],
    'no-use-before-define': [0],
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: true
      }
    ],
    'no-useless-constructor': [0],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'react/jsx-first-prop-new-line': [0],
    'react/jsx-indent-props': [0],
    'react/forbid-prop-types': [0],
    'react/jsx-indent': [2, 2],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/interactive-supports-focus': [0],
    'jsx-a11y/no-noninteractive-element-interactions': [1],
    'jsx-a11y/no-static-element-interactions': [1],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to']
      }
    ],
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': [0],
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': [2, { ignore: ['Components'] }],
    'no-debugger': [2],
    'no-nested-ternary': [1],
    'no-only-tests/no-only-tests': [2],
    'no-unused-expressions': [0],
    'react/destructuring-assignment': [1],
    'react/default-props-match-prop-types': [1],
    'react/jsx-no-duplicate-props': [1, { ignoreCase: true }],
    'react/jsx-no-undef': [1],
    'react/jsx-pascal-case': [
      1,
      {
        allowAllCaps: true,
        ignore: []
      }
    ],
    'react/jsx-uses-react': [1],
    'react/jsx-uses-vars': [1],
    'react/no-deprecated': [1],
    'react/no-direct-mutation-state': [2],
    'react/no-is-mounted': [1],
    'react/no-multi-comp': [1, { ignoreStateless: true }],
    'react/no-unused-prop-types': [1],
    'react/react-in-jsx-scope': [1],
    'react/require-render-return': [1],
    'react-hooks/rules-of-hooks': [2], // Checks rules of Hooks
    'react-hooks/exhaustive-deps': [1], // Checks effect dependencies
    strict: [0],
    'prettier/prettier': [2, prettierOptions]
  },
  overrides: [
    {
      files: '*.test.js',
      rules: {
        'no-unused-expressions': 'off'
      }
    }
  ]
};