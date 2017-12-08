/**
 * @desc   判断类型
 * @param  {String,Array....} obj
 */
const typeObj = {
  '[object Boolean]': 'boolean',
  '[object Number]': 'number',
  '[object String]': 'string',
  '[object Function]': 'function',
  '[object Undefined]': 'undefined',
  '[object Null]': 'null',
  '[object Array]': 'array',
  '[object Date]': 'date',
  '[object RegExp]': 'regexp',
  '[object Object]': 'object',
  '[object Error]': 'error'
}

const typeOf = (obj) => {
  let type = Object.prototype.toString.call(obj)
  return typeObj[type]
}

module.exports = typeOf