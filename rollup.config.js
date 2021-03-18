import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import { terser } from 'rollup-plugin-terser'
import glob from 'glob-all'
import path from 'path'
import filesize from 'rollup-plugin-filesize'

const config = []

const files = glob.sync(['src/*/source.js'])
files.forEach(f => {
    const dir = path.dirname(f)
    const name = path.basename(dir)
    const esm = {
        input: f,
        output: [
            { file: `dist/ficusjs-${name}.js`, format: 'esm', sourcemap: false }
        ],
        context: 'window',
        plugins: [
            resolve(),
            commonjs(),
            replace({
                preventAssignment: true,
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            babel({
                babelHelpers: 'bundled',
                babelrc: false,
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            modules: false,
                            targets: {
                                esmodules: true
                            }
                        }
                    ]
                ],
                plugins: ['@babel/plugin-proposal-object-rest-spread']
            }),
            terser({ output: { comments: false } }),
            filesize({
                showBrotliSize: true
            })
        ]
    }
    config.push(esm)
})

export default config
