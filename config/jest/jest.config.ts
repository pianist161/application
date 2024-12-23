import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest', // Настройка для работы с TypeScript
    testEnvironment: 'jsdom', // Или 'node', если вы тестируете серверный код
    rootDir: '../../',
    transform: {
        '^.+\\.tsx?$': 'ts-jest', // Обрабатываем файлы TypeScript
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

    testMatch: ['<rootDir>/src/**/*.test.ts?(x)'], // Шаблон для поиска тестов

};

export default config;
