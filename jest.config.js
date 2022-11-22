module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/test/**/*.test.(ts|js)'],
  testEnvironment: 'node'
}
