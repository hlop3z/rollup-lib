import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

export default [
	// Browser-Friendly
	{
		input: pkg.initFile,
		output: {
			name: pkg.name,
			file: `dist/${pkg.name}.js`,
			format: 'iife'
		},
		plugins: [
			resolve(),
			commonjs()
		]
	},

	// ESM (ECMAScript — Module)
	{
		input: pkg.initFile,
		output: [
			{ file: `dist/${pkg.name}.mjs`, format: 'es' },
			{ file: `dist/${pkg.name}.cjs.js`, format: 'cjs' }
		]
	}
];



