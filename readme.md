## react-skele

> simple react skeletons

## install

<code>npm i <b>react-skele</b></code>

## usage

```jsx
import Skeleton from 'react-skele'

<Skeleton />
```

## props

| **props**           | **description**                                                     | **default** |
| ------------------- | ------------------------------------------------------------------- | ----------- |
| `count?:`           | no. of skeletons to render                                          | `1`         |
| `className?:`       | additional classes to add to the skeleton                           |             |
| `backgroundColor?:` | the background color of the skeleton                                | `"#f4f4f4"` |
| `highlightColor?:`  | the moving highlight color of the skeleton                          | `"#e8e8e8"` |
| `height?:`          | set custom `height` property to the skeleton                        |             |
| `width?:`           | set custom `width` property to the skeleton                         |             |
| `borderRadius?:`    | set custom `border-radius` property to the skeleton                 |             |
| `display?:`         | set custom `display` property to the skeleton                       | `"block"`   |
| `isText?:`          | render skeleton as an empty text to adapt the wrappers text styles  | `false`     |
