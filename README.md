# comutils

[![Build Status](https://img.shields.io/appveyor/ci/gruntjs/grunt/master.svg) ![LICENSE MIT](https://img.shields.io/npm/l/express.svg)](https://www.npmjs.com/package/comutils) ![](https://img.shields.io/npm/v/comutils.svg)

 
前端代码常用工具类  

> 目的：集成前端常用util方法代码

## 安装使用

1. 直接下载`bulid`目录下的[comutils.min.js](https://github.com/chenxuan0000/comutils/blob/master/build/comutils.min.js)使用，支持UMD通用模块规范  
2. 使用npm安装

### 浏览器:
``` html
  <script src="comutils.min.js"></script>
  <script>
      var hasClass = comutils.hasClass(el,cls)
  </script>
```

### npm:
``` bash
$ npm install --save-dev comutils
```

``` javascript
// 完整引入
const comutils = require('comutils')
const typeOf = comutils.typeOf([])
```

**推荐使用方法**  

不需要完整引入所有函数，只引入需要使用的方法即可
``` javascript
// 只引入部分方法('comutils/<方法名>')
const typeOf = require('comutils/typeOf')
const typeOf = typeOf()
// import {}
import {typeOf} from 'comutils'
```
## API文档
### Array  
#### &emsp;&emsp;[arrayEqual][arrayEqual]&emsp;&emsp;判断两个数组是否相等 

### Class
#### &emsp;&emsp;[classApi][classApi]&emsp;&emsp;className的操作api
##### &emsp;&emsp;&emsp;&emsp;classApi.isElement(el) //是否元素节点
##### &emsp;&emsp;&emsp;&emsp;classApi.hasClass(el,cls)
##### &emsp;&emsp;&emsp;&emsp;classApi.addClass(el,cls)
##### &emsp;&emsp;&emsp;&emsp;classApi.removeClass(el,cls)
##### &emsp;&emsp;&emsp;&emsp;classApi.toggleClass(el,cls)

### Object  
#### &emsp;&emsp;[deepClone][deepClone]&emsp;&emsp;深拷贝，支持常见类型
#### &emsp;&emsp;[isEmptyObject][isEmptyObject]&emsp;&emsp;判断Object是否为空

### Regexp  
#### &emsp;&emsp;[isEmail][isEmail]&emsp;&emsp;判断是否为邮箱地址 
#### &emsp;&emsp;[isIdCard][isIdCard]&emsp;&emsp;判断是否为身份证号
#### &emsp;&emsp;[isPhoneNum][isPhoneNum]&emsp;&emsp;判断是否为手机号  
#### &emsp;&emsp;[isUrl][isUrl]&emsp;&emsp;判断是否为URL地址
#### &emsp;&emsp;[priceSubstr][priceSubstr]&emsp;&emsp;千位分割方法

### Secret
#### &emsp;&emsp;[secretInfo][secretInfo]&emsp;&emsp;给隐私信息标记号加密

### Time  
#### &emsp;&emsp;[formatPassTime][formatPassTime]&emsp;&emsp;格式化时间戳为天时分秒[d,h,m,s]
#### &emsp;&emsp;[formatTime][formatTime]&emsp;&emsp;格式化时间戳为年月日时分秒[y-m-d h:m:s]

### localStorage
#### &emsp;&emsp;[localStorageApi][localStorageApi]&emsp;&emsp;本地持久化存储
##### &emsp;&emsp;&emsp;&emsp;localStorageApi.set(name)
##### &emsp;&emsp;&emsp;&emsp;localStorageApi.get(name)
##### &emsp;&emsp;&emsp;&emsp;localStorageApi.remove(name)
##### &emsp;&emsp;&emsp;&emsp;localStorageApi.clear(name)

### cookie
#### &emsp;&emsp;[cookieApi][cookieApi]&emsp;&emsp;cookie存储(适用和服务端交互)
##### &emsp;&emsp;&emsp;&emsp;cookieApi.set(name, value[, end[, path[, domain[, secure]]]])
##### &emsp;&emsp;&emsp;&emsp;cookieApi.get(name)
##### &emsp;&emsp;&emsp;&emsp;cookieApi.has(name)
##### &emsp;&emsp;&emsp;&emsp;cookieApi.remove(name)
##### &emsp;&emsp;&emsp;&emsp;cookieApi.keys()

### Type
#### &emsp;&emsp;[typeOf][typeOf]&emsp;&emsp;判断类型

### Url
#### &emsp;&emsp;[parseQs][parseQs]&emsp;&emsp;url参数转对象
#### &emsp;&emsp;[stringfyQs][stringfyQs]&emsp;&emsp;对象序列化

[arrayEqual]:https://github.com/chenxuan0000/comutils/blob/master/src/array/arrayEqual.js
[secretInfo]:https://github.com/chenxuan0000/comutils/blob/master/src/secret/secretInfo.js
[typeOf]:https://github.com/chenxuan0000/comutils/blob/master/src/type/typeOf.js
[classApi]:https://github.com/chenxuan0000/comutils/blob/master/src/class/classApi.js
[deepClone]:https://github.com/chenxuan0000/comutils/blob/master/src/object/deepClone.js
[isEmptyObject]:https://github.com/chenxuan0000/comutils/blob/master/src/object/isEmptyObject.js
[isEmail]:https://github.com/chenxuan0000/comutils/blob/master/src/regexp/isEmail.js
[isIdCard]:https://github.com/chenxuan0000/comutils/blob/master/src/regexp/isIdCard.js
[isPhoneNum]:https://github.com/chenxuan0000/comutils/blob/master/src/regexp/isPhoneNum.js
[isUrl]:https://github.com/chenxuan0000/comutils/blob/master/src/regexp/isUrl.js
[priceSubstr]:https://github.com/chenxuan0000/comutils/blob/master/src/regexp/priceSubstr.js
[formatPassTime]:https://github.com/chenxuan0000/comutils/blob/master/src/time/formatPassTime.js
[formatTime]:https://github.com/chenxuan0000/comutils/blob/master/src/time/formatTime.js
[parseQs]:https://github.com/chenxuan0000/comutils/blob/master/src/url/parseQueryString.js
[stringfyQs]:https://github.com/chenxuan0000/comutils/blob/master/src/url/stringfyQueryString.js
[localStorageApi]:https://github.com/chenxuan0000/comutils/blob/master/src/stroge/localStorage.js
[cookieApi]:https://github.com/chenxuan0000/comutils/blob/master/src/cookie/cookie.js
