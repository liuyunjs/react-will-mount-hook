# react-will-mount-hook

一个模拟类组件 componentWillMount 生命周期的 hook
只会执行一次

## 安装

```
    npm install react-will-mount-hook --save

    or

    yarn add react-will-mount-hook
```

## 示例

```javascript
import * as React from 'react';
import { View, Text } from 'react-native';
import useWillMount from 'react-will-mount-hook';

export default () => {
  const [count, setCount] = React.useState(0);

  useWillMount(() => {
    console.log('useWillMount hook');
  });

  React.useEffect(() => {
    setCount(count + 1);
  }, []);

  return (
    <View>
      <Text>{count}</Text>
    </View>
  );
};
```
