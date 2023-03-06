module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
    '\\.(css|less)$': '<rootDir>/tests/unit/mocks/cssMock.js',
  },
};
