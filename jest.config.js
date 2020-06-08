/**
 * Created by qiqf on 2020/6/8
 */

module.exports = {
  roots: [
    "<rootDir>/test"
  ],
  testRegex: 'test/(.+)\\.test\\.(jsx?|tsx?)$',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
