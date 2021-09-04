import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';

const base = {
    input: './src/index.ts',
    external: [
        ...Object.keys(pkg.dependencies || {})
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        typescript({
            typescript: require('typescript')
        }),
        postcss({
            plugins: [autoprefixer()],
            sourceMap: true,
            extract: true,
            minimize: true
        }),
    ]
}

export default [
    {
        ...base,
        output: { file: 'es/index.js', format: 'es', indent: false },
    },
    {
        ...base,
        output: { file: 'lib/index.js', format: 'cjs', indent: false },
    },
]
