const swc = require("@swc/core");
import { readFileSync } from 'fs';
import path from 'path';

export const transform = async (filePath, filename, pluginOptions) => {
    const code = readFileSync(filePath, { encoding: 'utf-8' });
    const swcOutput = await swcTransform(code, filename, pluginOptions);
    
    return { swcOutput }
}

const swcTransform = (code, filename = 'emotion.js', pluginOptions = {}) => 
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
