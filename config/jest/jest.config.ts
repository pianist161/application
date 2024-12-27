import type { Config } from '@jest/types';
import path from 'path';

const config: Config.InitialOptions = {
    preset: 'ts-jest', // Настройка для работы с TypeScript
    testEnvironment: 'jsdom', // Или 'node', если вы тестируете серверный код
    rootDir: '../../',
    transform: {
        '^.+\\.tsx?$': 'ts-jest', // Обрабатываем файлы TypeScript
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePaths: ['<rootDir>src'],
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    },

    testMatch: ['<rootDir>/src/**/*.test.ts?(x)'], // Шаблон для поиска тестов

};

export default config;
