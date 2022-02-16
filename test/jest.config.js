module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>'],
    transform: {
        '^.+\\.js?$': ['@swc/jest', {
            jsc: {
                externalHelpers: false,
                parser: {
                    syntax: "ecmascript",
                    decorators: true
                }
            },
            module: {
                type: "es6"
            }
        }],
    },
}