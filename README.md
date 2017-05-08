# Webpack blocks - TypeScript (ts-loader)

This is a `ts` [block](https://github.com/andywer/webpack-blocks) providing
[TypeScript](http://www.typescriptlang.org/) support using
[ts-loader](https://github.com/TypeStrong/ts-loader).

[webpack-blocks](https://github.com/andywer/webpack-blocks) uses
[awesome-typescript-loader](https://github.com/s-panferov/awesome-typescript-loader)
in its built-in typescript loader. While there is nothing wrong with this
feature-rich loader, there are some cases where it doesn't quite work. In
particular, it does not work for
[vue-loader](https://github.com/vuejs/vue-loader). This package provides an
alternative solution that addresses this issue.

## Installation

You can install webpack-blocks-ts using npm:

    npm install --save-dev webpack-blocks-ts

or yarn:

    yarn add --dev webpack-blocks-ts

## Status

This package is compatible with webpack-blocks 1.x, and is therefore only
compatbile with webpack 2. It is based on [this
code](https://github.com/foxbunny/vue-ts-sandbox/blob/77206034eb5238bc2dfa54d565886738f15adc68/config/ts-block.js),
so you may use the orignal along with webpack-blocks <1.0 if you are limited to
webpack 1.

This package is in very early stages of development, and not considered
production ready.

## Usage

Here is the basic usage:

```javascript
const {createConfig, ...} = require('webpack-blocks');
const ts = require('webpack-blocks-ts');

module.exports = createConfig([
  // ...
  ts(),
  // ...
]);
```

Various options can be passed to the `ts` block. For example:

```javascript
  // ...
  ts({
    silent: true,
  }),
  // ...
```

These are all options of the underlying `ts-loader`, and are documented
[here](https://github.com/TypeStrong/ts-loader#available-options).

## Usage with Vue.js

As mentioned in the introduction, this block was specifically created to address
issues with using the default TypeScript block with Vue.js. Here is an example
using [webpack-blocks-vue](https://github.com/foxbunny/webpack-blocks-vue/) with
this package.

```javascript
const {createConfig, ...} = require('webpack-blocks');
const ts = require('webpack-blocks-ts');
const vue = require('webpack-blocks-vue');

module.exports = createConfig([
  // ...
  ts({
    appendTsSuffixTo: [/\.vue$/]
  }),
  vue({
    loaders: {
      esModule: true,
      // ...
    }
  })
  // ...
]);
```

In `.vue` files, we would then use `ts` as script lang:

```html
<template>
  Hello, {{ name }}
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({})
  export default class Hello extends Vue {
    name = 'World'
  }
</script>
```

This also works if you wish to use the `src` attribute instead of inlining the
TypeScript code. In fact, you *must* use `lang="ts"` even in this case.

```html
<template>
  Hello, {{ name }}
</template>

<script lang="ts" src="./Hello.ts"></script>
```