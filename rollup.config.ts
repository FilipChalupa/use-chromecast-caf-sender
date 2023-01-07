import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import fs from 'fs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

export default {
	input: './src/index.tsx',
	output: [
		{
			file: packageJson.main,
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: packageJson.module,
			format: 'esm',
			sourcemap: true,
		},
	],
	external: ['react'],
	plugins: [peerDepsExternal(), resolve(), commonjs(), typescript()],
}
