# comUtils

[![Build Status](https://travis-ci.org/proYang/outils.svg?branch=master) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/comutils) 

 
前端代码常用工具类  

> 目的：集成前端常用util方法代码

## 安装使用

1. 直接下载`min`目录下的[comUtils.min.js](https://github.com/chenxuan0000/comUtils/blob/master/min/comUtils.min.js)使用，支持UMD通用模块规范  
2. 使用npm安装

### 浏览器:
``` html
  <script src="comUtils.min.js"></script>
  <script>
      var hasClass = comUtils.hasClass(el,cls)
  </script>
```

### npm:
``` bash
$ npm install --save-dev comutils
```

webpack、RequireJS、SeaJS等

``` javascript
// 完整引入
const comUtils = require('comUtils')
const hasClass = comUtils.hasClass(el,cls)
```

**推荐使用方法**  

不需要完整引入所有函数，只引入需要使用的方法即可
``` javascript
// 只引入部分方法('outils/<方法名>')
const hasClass = require('comUtils/hasClass')
const hasClass = hasClass()
```
## API文档
### Array  
#### &emsp;&emsp;[arrayEqual][arrayEqual]&emsp;&emsp;判断两个数组是否相等 

### Class
#### &emsp;&emsp;[isElement][addClass]&emsp;&emsp;判断元素是否为元素节点  
#### &emsp;&emsp;[addClass][addClass]&emsp;&emsp;为元素添加class  
#### &emsp;&emsp;[hasClass][hasClass]&emsp;&emsp;判断元素是否有某个class  
#### &emsp;&emsp;[removeClass][removeClass]&emsp;&emsp;为元素移除class  
#### &emsp;&emsp;[toogleClass][toogleClass]&emsp;&emsp;为元素添加/去除class  

### Object  
#### &emsp;&emsp;[deepClone][deepClone]&emsp;&emsp;深拷贝，支持常见类型
#### &emsp;&emsp;[isEmptyObject][isEmptyObject]&emsp;&emsp;判断Object是否为空

### Regexp  
#### &emsp;&emsp;[isEmail][isEmail]&emsp;&emsp;判断是否为邮箱地址 
#### &emsp;&emsp;[isIdCard][isIdCard]&emsp;&emsp;判断是否为身份证号
#### &emsp;&emsp;[isPhoneNum][isPhoneNum]&emsp;&emsp;判断是否为手机号  
#### &emsp;&emsp;[isUrl][isUrl]&emsp;&emsp;判断是否为URL地址

### Time  
#### &emsp;&emsp;[formatPassTime][formatPassTime]&emsp;&emsp;格式化时间戳为天时分秒[d,h,m,s]

### Url
#### &emsp;&emsp;[parseQs][parseQs]&emsp;&emsp;url参数转对象
#### &emsp;&emsp;[stringfyQs][stringfyQs]&emsp;&emsp;对象序列化

[arrayEqual]:https://github.com/chenxuan0000/comUtils/blob/master/src/array/arrayEqual.js

[addClass]:https://github.com/chenxuan0000/comUtils/blob/master/src/class/addClass.js
[hasClass]:https://github.com/chenxuan0000/comUtils/blob/master/src/class/hasClass.js
[removeClass]:https://github.com/chenxuan0000/comUtils/blob/master/src/class/removeClass.js
[isElement]:https://github.com/chenxuan0000/comUtils/blob/master/src/class/isElement.js
[toogleClass]:https://github.com/chenxuan0000/comUtils/blob/master/src/class/toogleClass.js
[deepClone]:https://github.com/chenxuan0000/comUtils/blob/master/src/object/deepClone.js
[isEmptyObject]:https://github.com/chenxuan0000/comUtils/blob/master/src/object/isEmptyObject.js
[isEmail]:https://github.com/chenxuan0000/comUtils/blob/master/src/regexp/isEmail.js
[isIdCard]:https://github.com/chenxuan0000/comUtils/blob/master/src/regexp/isIdCard.js
[isPhoneNum]:https://github.com/chenxuan0000/comUtils/blob/master/src/regexp/isPhoneNum.js
[isUrl]:https://github.com/chenxuan0000/comUtils/blob/master/src/regexp/isUrl.js
[formatPassTime]:https://github.com/chenxuan0000/comUtils/blob/master/src/time/formatPassTime.js
[parseQs]:https://github.com/chenxuan0000/comUtils/blob/master/src/url/parseQueryString.js
[stringfyQs]:https://github.com/chenxuan0000/comUtils/blob/master/src/url/stringfyQueryString.js
