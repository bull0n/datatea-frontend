module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  collectCoverage: true,
  moduleFileExtensions: [
    "js",
    "ts",
    "json",
    "vue",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  transform: {
    // process `*.vue` files with `vue-jest`
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  //testRegex: "(/tests/unit/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$"
};
