const swc = require('@swc/core');
const babel = require('@babel/core');

import { readFileSync } from 'fs';
import path from 'path';

export const transform = async (filePath, filename = 'emotion.js', pluginOptions = {}) => {
    const code = readFileSync(filePath, { encoding: 'utf-8' });
    const swcOutput = await swcTransform(code, filename, pluginOptions);
    const babelOutput = await babelTransform(code, filename, pluginOptions);
    
    return { swcOutput, babelOutput }
}

const swcTransform = (code, filename, pluginOptions) => 
    swc.transform(code, {
        sourceMaps: false,
        filename,
        jsc: {
            parser: {
                syntax: "ecmascript",
                jsx: true
            },
            target: "es2022",
            experimental: {
                plugins: [
                    [
                        path.resolve(__dirname, "../../emotion-swc-plugin/target/wasm32-wasi/release/emotion_swc_plugin.wasm"),
                        pluginOptions
                    ]
                ]
            },
        },
    }).then(output => output.code);

const babelTransform = (code, filename, pluginOptions) => 
    babel.transformAsync(code, {
        babelrc: false,
        configFile: false,
        ast: false,
        filename,
        plugins:[['@emotion', pluginOptions]] 
    }).then(({ code }) => code)

