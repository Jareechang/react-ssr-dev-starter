import {
    getJsonPlugin,
    getTsPlugin,
    getEslintPlugin,
    getBabelPlugin
} from '@common-web/rollup';
import commonjs from '@rollup/plugin-commonjs';

const extensions = [
    '.js',
    '.jsx',
    '.ts',
    '.tsx'
]

const opts = {
    eslint: {
        disabled: true
    },
    babel: {
        exclude: 'node_modules/**'
    },
    typescript: {
        module: 'CommonJS'
    }
}
 
//const plugins = getBaseRollupPlugins({
    //eslint: {
        //disabled: true
    //},
    //babel: {
        //exclude: 'node_modules/**'
    //},
    //typescript: {
        //module: 'CommonJS'
    //}
//}).concat([
    //commonjs({ extensions })
    //// Include your own plugins to support other features 
//]);
 
export default {
    input: 'src/index.tsx',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs'
        }
    ],
    external: [
        'react',
        'path',
        'react-dom/server',
        'express'
    ],
    plugins: [
        getJsonPlugin(opts),
        getTsPlugin(opts),
        commonjs({ extensions }),
        getBabelPlugin(opts),
    ]
}
 
