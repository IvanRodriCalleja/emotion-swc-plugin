# emotion-swc-plugin

A plugin for transform `@emotion` components and styles

## Usage

`npm i emotion-swc-plugin`
.swcrc

```json
{
  "jsc": {
    "experimental": {
      "plugins": [
        [
          "emotion-swc-plugin",
          {}
        ]
      ]
    }
  }
}
```

## Compatibility

This is a toy project to support `emotion-babel-plugin` and learn how to create `swc` plugins 