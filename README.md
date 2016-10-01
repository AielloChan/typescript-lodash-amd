# 使用说明

## 使用 amd 方式的 lodash
1. 将 `lodash/3.10.2` 放置于你的 Web Server，如：

```
Your_WebRoot/lodash/3.10.2
```

2. 配置 Require.js 或 Dojo

```
// 假如你的主机名为 localhost

// Require.js
require.config({

    ...

    paths: {
        "lodash": "//localhost/lodash/3.10.2"
    },

    ...

});

// Dojo
var dojoConfig = {
    packages: [
        {
            name: "lodash",
            location: "//localhost/lodash/3.10.2"
        }
    ]
}


```

## 安装 lodash.d.ts

1. 在 typings.json 中增加以下资源：

```
// typings.json

{
  "globalDependencies": {
    "lodash": "github:AielloChan/"
  }
}
```

2. 安装 d.ts：

```
> typings install
```

3. Typescript 使用

```
import reduce = require('lodash/reduce');

reduce([1000, 2000], (total, n) => {
    return <number>total + n;
});

...

```

