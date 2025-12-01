import auto from 'eslint-config-canonical/auto';

export default [
  ...auto,
  {
    rules: {
      'react/forbid-component-props': 'off',
    },
  },
];
