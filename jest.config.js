const { defaults } = require('jest-config')

module.exports = {
    transform: {
        "^.+\\.vue$": "vue3-jest",
        "^.+\\js$": "babel-jest"
    },
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'vue'],
    setupFilesAfterEnv: ['./jest.setup.js']
}