import pkg from './package.json';

export default [
	{
		input: 'src/__init__.js',
		output: [
			{ file: pkg.module, format: 'es' }
		]
	}
];
