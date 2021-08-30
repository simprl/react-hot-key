export default [
    {
        input: './out-tsc/index.js',
        output: { file: 'es/index.js', format: 'es', indent: false },
    },
    {
        input: './out-tsc/index.js',
        output: { file: 'lib/index.js', format: 'cjs', indent: false },
    },
]
