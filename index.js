/**
 * TypeScript webpack block using ts-loader
 *
 * @see https://github.com/TypeStrong/ts-loader
 */

function ts(options) {
  return context => prevConfig => Object.assign(prevConfig, {
    resolve: Object.assign(prevConfig.resolve || {}, {
      extensions: ((prevConfig.resolve || {}).extensions || [])
        .concat(['.ts', '.tsx', '.js'])
    }),
    module: Object.assign(prevConfig.module || {}, {
      rules: ((prevConfig.module || {}).rules || []).concat([
        {
          test: context.fileType('application/x-typescript'),
          loader: 'ts-loader',
          options: options
        }
      ]),
    }),
  });
}

module.exports = ts
