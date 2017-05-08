var {createConfig} = require('webpack-blocks');
var ts = require('./index');

const tsConf = options => createConfig([
  ts(options)
]);

test('default options', () => {
  expect(tsConf()).toMatchSnapshot();
});

test('add loader options', () => {
  expect(tsConf({
    silent: true
  })).toMatchSnapshot();
});