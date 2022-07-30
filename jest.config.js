module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.tsx',
    '<rootDir>/src/pages/**/*.tsx',
    '<rootDir>/src/hooks/**/*.tsx',
    '<rootDir>/src/store/**/*.tsx',
    '<rootDir>/src/services/**/*.ts',
  ],
};
