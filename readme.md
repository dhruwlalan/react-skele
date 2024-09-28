## react-skele

> A react skeleton package with some personal tweaks inspired from the [dvtng/react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton) 🙌

## Install

```bash
npm i react-skele
```

## Usage

```jsx
import Skeleton from 'react-skele'

<div className="h-5 w-20 rounded-full">
  <Skeleton />
</div>
```

## Props

| **Props**           | **Description**                                                               | **Default** |
| ------------------- | ----------------------------------------------------------------------------- | ----------- |
| `el?:`              | The HTML element to render (e.g., `div`, `span`)	                            | `false`     |
| `count?:`           | Number of skeletons to render                                                 | `1`         |
| `isText?:`          | Render skeleton as an empty text to adapt the wrappers text styles            | `false`     |
| `backgroundColor?:` | The background color of the skeleton                                          | `"#f4f4f4"` |
| `highlightColor?:`  | The moving highlight color of the skeleton                                    | `"#e8e8e8"` |
| `className?:`       | Additional classes to add to the skeleton                                     |             |
| `height?:`          | Set custom `height` property to the skeleton                                  |             |
| `width?:`           | Set custom `width` property to the skeleton                                   |             |
| `borderRadius?:`    | Set custom `border-radius` property to the skeleton                           |             |
| `display?:`         | Set custom `display` property to the skeleton                                 | `"block"`   |
| `isText?:`          | Render skeleton as an empty text to adapt the wrappers text styles            | `false`     |
| `style?:`           | Inline styles to apply directly to the skeleton (overrides everthing above)   | `false`     |
