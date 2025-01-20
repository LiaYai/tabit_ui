"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("vitest/config");
exports.default = (0, config_1.defineConfig)({
    test: {
        globals: true, // Для использования глобальных переменных, таких как 'expect', 'describe' и 'it'
        setupFiles: './src/setupTests.ts', // Путь к файлу для настройки тестов (если он у вас есть)
        include: ['src/**/*.{spec,test}.ts{,x}'],
        exclude: [
            'src/components/**/*.stories.*',
            '**/node_modules/**',
            '**/dist/**',
            '**/.{idea,git,cache,output,temp}/**',
            '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
        ],
        coverage: {
            provider: 'istanbul', // Указание провайдера для покрытия
            include: ['src/components/**/*.ts{,x}'],
            exclude: ['src/components/**/*.stories.*'],
        },
        environment: 'jsdom', // Устанавливаем среду для тестов
    },
});
