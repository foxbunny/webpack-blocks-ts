/**
 * TypeScript webpack block using ts-loader
 *
 * @see https://github.com/TypeStrong/ts-loader
 */

function ts(options = {}) {
  return (context, util) => util.merge({
    resolve: {
      extensions: ['.ts', '.tsx'],
    },
    module: {
      rules: [
        Object.assign({
          test: /\.(ts|tsx)$/,
          loader: 'ts-loader',
          options,
        }, context.match),
      ],
    },
  });
}

module.exports = ts
