# emotion-swc-plugin


**SWC** transform plugin for **Emotion** equivalent to [@emotion/babel-plugin](https://www.npmjs.com/package/@emotion/babel-plugin)

This plugin is a fork of [swc_emotion](https://github.com/vercel/next.js/tree/canary/packages/next-swc/crates/emotion) in order to allow run it as a plugin. This is created because existing one is executed from a **SWC** custom phase and uses a signature for `source_map` (`Arc<SourceMap>`) incompatible with plugin proxy (`Arc<SourceMapper>`).

This is mainly useful for people that don't use **Next JS** and can't use directly the default plugin like **CRA**, **Custom Webpack config** or **package libraries**.

## Install

```js
yarn add --dev emotion-swc-plugin

//or

npm install -d emotion-swc-plugin
```

## Usage

```js
{
  jsc: {
    ...
   experimental: {
     plugins: [ ['emotion-swc-plugin', config] ] 
   }
}
```

## Configuration

The plugin uses the same config as described in [Next emotion documentation](https://nextjs.org/docs/advanced-features/compiler#emotion).

```js
{
  jsc: {
    ...
   experimental: {
     plugins: [ ['emotion-swc-plugin', {
      // default is true. It will be disabled when build type is production.
      sourceMap?: boolean,
      // default is 'dev-only'.
      autoLabel?: 'never' | 'dev-only' | 'always',
      // default is '[local]'.
      // Allowed values: `[local]` `[filename]` and `[dirname]`
      // This option only works when autoLabel is set to 'dev-only' or 'always'.
      // It allows you to define the format of the resulting label.
      // The format is defined via string where variable parts are enclosed in square brackets [].
      // For example labelFormat: "my-classname--[local]", where [local] will be replaced with the name of the variable the result is assigned to.
      labelFormat?: string,
    }] ] 
   }
}
```

**Note**: Only importMap in @emotion/babel-plugin is not supported for now.

