const path = require('path');
const pkg = require('./package.json');

module.exports = {
    title: `${pkg.name} v${pkg.version}`,
    usageMode: 'expand',
    exampleMode: 'expand',
    moduleAliases: {
        [pkg.name]: path.resolve(__dirname, 'src'),
    },
    components: 'src/*.{ts,tsx}',
    skipComponentsWithoutExample: true,
    propsParser: require('react-docgen-typescript').withDefaultConfig('./tsconfig.json').parse,
    getExampleFilename(componentPath) {
        return componentPath.replace(/\.(ts?|tsx?)$/, '.md');
    },
    getComponentPathLine(componentPath) {
        const name = path.basename(componentPath, '{.ts, .tsx}').replace(/\.(ts?|tsx?)$/, '');

        return `import { ${name} } from '${pkg.name}';`;
    },
}
