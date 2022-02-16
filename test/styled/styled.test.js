import path from 'path';
import { readdirSync } from 'fs';

import { transform } from '../test-utils/transform';

const testDirectories = readdirSync(__dirname, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

describe('styled-no-macro', () => {

    testDirectories.map(dir => {
        it(`No macro - ${dir}`, async() => {
            const filePath = path.resolve(__dirname, `${dir}/no-macro/input.js`);
            const { swcOutput } = await transform(filePath);
            console.log(swcOutput);
        })
    })
})