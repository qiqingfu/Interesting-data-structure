module.exports = {
  rootDir: __dirname,
  globals: {
    __DEV__: true
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^test/(.*)$': '<rootDir>/test/$1',
    /**
     * 测试文件中引入的其他文件的别名, 需要在此配置对应的 Map, 否则无法找到对应的别名模块
     */
    '^util/(.*)$': '<rootDir>/src/util/$1'
  },
  testMatch: ['<rootDir>/test/**/*.spec.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/index.cjs.js'
  ]
}
