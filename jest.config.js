// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[tj]s$',
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    testPathIgnorePatterns: ['/__tests__/utils/'],
};
