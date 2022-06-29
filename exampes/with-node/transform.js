const swc = require('@swc/core');
const path = require('path');
const { readFileSync } = require('fs');

const code = readFileSync(path.resolve(__dirname, 'Component.js'), {encoding: 'utf-8'});

const output = swc.transformSync(code, {
    sourceMaps: false,
    isModule: true,
    filename: 'Component.js',
	jsc: {
		parser: {
			syntax: 'ecmascript',
			jsx: true,
		},
		target: 'es2022',
        experimental: {
            plugins: [ ['emotion-swc-plugin', {
                sourceMap: true,
                autoLabel: 'dev-only',
                labelFormat: '[local]'
            }] ] 
          }
	}
});

console.log({ code: output.code });