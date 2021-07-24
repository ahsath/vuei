const { defaults } = require('jest-config')

module.exports = {
    transform: {
        "^.+\\.vue$": "vue-jest",
        "^.+\\js$": "babel-jest"
    },
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'vue'],
}