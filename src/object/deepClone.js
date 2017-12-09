/**
 * @desc 深拷贝，支持常见类型
 * @param {Object} obj
 */
const deepClone = (obj) => {
  let str
  let newobj = obj.constructor === Array ? [] : {}
  if (typeof obj !== 'object') {
    return
  } else if (window.JSON) {
    str = JSON.stringify(obj) //系列化对象
    newobj = JSON.parse(str) //还原
  } else {
    for (var i in obj) {
      newobj[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
    }
  }
  return newobj
}

module.exports = deepClone